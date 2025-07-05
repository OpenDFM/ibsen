PROMPT_RELATION = """
{{#system~}}
以下描述是戏剧角色“{{name}}”最近经历的事件。请描述“{{target}}”的当前状态，并根据已有关系更新“{{name}}”与“{{target}}”之间的关系。注意不要忽视已有的关系。
{{~/system}}

{{#user~}}
事件：{{event}}

{{name}}已有的关系：
{{relation}}

请用5行客观而准确地总结{{target}}的当前状态以及{{name}}与{{target}}之间的完整关系：
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.1 stream=False}}
{{~/assistant}}
"""

PROMPT_UPDATE_IMPRESSION = """
{{#system~}}
以下描述是戏剧角色“{{name}}”最近经历的事件。考虑到{{name}}之前对“{{target}}”的印象，请用3行总结在经历这些事件后，{{name}}会如何看待{{target}}。注意不要忽视已有的印象。
{{~/system}}

{{#user~}}
之前对{{target}}的印象：
{{impression}}

事件：{{events}}

经历这些事件后，{{name}}会如何看待{{target}}？请用3行总结{{name}}当前对{{target}}的印象。  
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False}}
{{~/assistant}}
"""

PROMPT_INFLUENCE = """
{{#system~}}
假设你正在扮演一个名为“{{name}}”的戏剧角色。以下描述是你已知的记忆条目。如果该描述能够直接、明显地影响{{name}}的形象和行为，则输出1；否则输出0。你应只输出一个整数。 
{{~/system}}

{{#user~}}
{{name}}来自显赫背景，其父亲是一位将军，经常被媒体称为“将军的孩子”。  
{{~/user}}
{{#assistant~}}
1
{{~/assistant}}

{{#user~}}
{{name}}有一个私人助理，记录所有{{name}}的日程。  
{{~/user}}
{{#assistant~}}
0
{{~/assistant}}

{{#user~}}
{{memory}}
{{~/user}}
{{#assistant~}}
{{gen 'rate'}}
{{~/assistant}}
"""

PROMPT_EVENT_MONOLOGUE = """
{{#system~}}
{{name}}是一个戏剧角色。{{instruction}}  
你需要遵循上述描述来扮演此角色。给定{{name}}经历的事件及其与该事件相关的记忆，你需要以{{name}}的视角，用2行具有角色特色地叙述该事件。  
{{~/system}}

{{#user~}}
{{name}}经历了以下事件：  
{{event}}

与该事件相关的人际关系：  
{{relations}}

{{name}}与该事件相关的过往记忆：  
{{memories}}

如果你是{{name}}并经历了此事件，你会怎么想？请使用{{name}}的第一人称口吻，用2行既精准又具有角色特色地叙述该事件：  
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.3 stream=False}}
{{~/assistant}}
"""

PROMPT_SUMMARIZE_SYSTEM = """
{{#system~}}
你是一名正在准备戏剧的演员。你将要扮演名为{{name}}的角色。

以下几行是你的角色与其他角色之间发生的对话。从{{name}}的角度，按照话题逐点总结对话历史。总结应限制为5点。

你应以JSON格式输出回复。格式示例：
```
{"summary": ["总结要点1", "总结要点2", ...]}
```
{{~/system}}
"""

PROMPT_SUMMARIZE_ASSISTANT = """
{{#assistant~}}
{{gen 'ans' stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_IMPRESSION = """
{{#system~}}
{{name}}是一个戏剧角色。根据该角色的背景资料，你应总结{{name}}会如何看待其他角色。对每个角色的总结限制为5行。
如果背景资料未提及某些角色，则视为{{name}}对这些角色没有印象。

你应以JSON格式输出响应。格式示例：
```
{"角色1": "印象1", "角色2": "印象2", ...}
```
{{~/system}}

{{#user~}}
按照时间顺序，{{name}}的背景资料如下：
{{memories}}

请分别以JSON格式输出{{name}}对以下角色的印象。如果角色未在背景资料中提及，则视为{{name}}对该角色没有印象。
{{characters}}
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False max_tokens=2000 response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_MONOLOGUE = """
{{#system~}}
给你一个戏剧角色“{{name}}”及其独白。在独白之后，该角色经历了一系列事件，其心理可能发生了变化。
基于已有的独白和{{name}}之后经历的事件，你应根据指示扮演此角色，并以第一人称生成新的独白。
{{~/system}}

{{#user~}}
{{name}}之前的独白：
{{monologue}}

之后，该角色按时间顺序经历了这些事件：
{{memories}}

对扮演{{name}}的指示：
{{instruction}}

经历这些事件后，如果你是{{name}}，你会怎么想或做？请根据指示，在5行内具有角色特色地总结{{name}}的独白。
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.3 stream=False}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_OUTLINE = """
{{#system~}}
假设你目前是这部戏剧中一个场景的导演。

给定该场景的角色和现有剧本，请首先总结到目前为止剧情发生了什么。

然后，基于角色之间的关系和印象，你需要为即将到来的剧本写一个详细的续写。确保当前场景和续写的整体剧情符合给定的剧情目标，并使剧本的具体内容更贴近角色形象。

现有剧本可能已经部分实现了当前的剧情目标。你必须严格遵循剧情目标的要求，在续接现有剧本的同时逐步发展情节。要注意不要忽视现有剧本，也不要创造超出指定剧情目标范围的情节发展。

你生成的剧情指导应描述接下来将发生的事情，而不用对话剧本格式。不要包含已经在现有剧本中发生的事件，也不要过早生成超过达到剧情目标之后的事件。剧情中的角色必须出现在该场景中。

你应以JSON格式总结现有剧本并给出即将到来的剧本的续写。格式示例：
```
{"previous_outline": "对现有剧本的总结", "new_outline": "即将到来的剧本的续写"}
```
{{~/system}}

{{#user~}}
场景中的角色：{{characters}}
你的剧情不能包含不在场景中的角色。

角色描述：
{{descriptions}}

角色之间的关系：
{{relations}}

角色之间的印象：
{{impressions}}

现有剧本：
{{dialogue_history}}

请先总结现有剧本的剧情。
{{background}}
接下来演出的目标：{{act_goal}}

与剧情目标相关的角色记忆：
{{memories}}
上述记忆已在过去发生。你应参考它们来创建大纲。

基于以上信息，剧情接下来应如何发展？请为即将到来的剧情提供详细的续写，与之前的剧本无缝衔接，使剧情和角色形象相关。确保整个剧情朝着剧情目标推进。你应以JSON格式输出。
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 max_tokens=4000 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_SCRIPT = """
{{#system~}}
假设你目前是这部戏剧中一个场景的导演。

给定该场景的角色以及即将到来的剧情大纲，请将即将到来的剧情大纲翻译成脚本格式，最多{{num_lines}}行，确保遵循故事脉络并与之前的剧本无缝衔接。

你可以逐步展开脚本，根据即将到来的剧情大纲丰富细节。如果在达到{{num_lines}}行之前覆盖了所有大纲事件，则可以结束创作。

确保你的续写与现有剧本平滑衔接。尽量使用角色对话来替代旁白。

你应以JSON格式输出脚本续写。脚本的每一行都包括说话人“role”和他/她的台词“content”。说话人只能是旁白或场景中的某个角色。格式示例：
```
{"scripts": [{"role": "说话人1", "content": "..."}, {"role": "说话人2", "content": "..."}, {"role": "旁白", "content": "..."}, ...]}
```
{{~/system}}

{{#user~}}
场景中的角色：{{characters}}

角色之间的关系：
{{relations}}

现有剧情大纲：
{{prev_outline}}
{{background}}
即将到来的剧情大纲：
{{act_outline}}

基于以上信息，请将即将到来的剧情大纲翻译成脚本格式，最多{{num_lines}}行，使用JSON格式。确保续写与现有剧本无缝衔接，并遵循即将到来的剧情大纲。注意，说话人只能是旁白或场景中的某个角色。尽量使用角色对话来替代旁白。
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 max_tokens=2000 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_INSTRUCT = """
{{#system~}}
假设你目前是这部戏剧中一个场景的导演。

给定该场景的角色、剧情目标和现有剧本，请为演员提供下一行台词的简要概述。但不要直接提供原始台词。

然后，使用关键词指导演员如何在下一行中扮演角色，使其台词符合剧本、人物刻画和剧情目标。
{{~/system}}

{{#user~}}
场景中的角色：{{characters}}

角色之间的关系：
{{relations}}

现有剧本：
{{dialogue_history}}
{{background}}
本场景的剧情目标：{{act_goal}}

根据剧本，下一行台词的角色是{{actor_name}}，台词内容为：{{content}}。
但不要直接为扮演该角色的演员提供原始台词。

{{actor_name}}的角色描述：{{description}}

基于以上信息，请为演员提供下一行台词的简要概述，但不要直接提供原始台词。然后，生成若干关键词，以指导演员如何表演该台词，使其符合剧本、剧情目标和{{actor_name}}的角色特征。
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 presence_penalty=0.6 stream=False}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_CHECK_GOAL = """
{{#system~}}
假设你目前是这部戏剧中一个场景的导演。

给定该场景的角色和剧情目标，请判断现有剧本是否包含了该剧情目标。

你应以JSON格式输出答案。在“completed”中给出结果。如果现有剧本包含剧情目标，则“completed”为true，否则为false。
```
{"completed": true or false}
```
{{~/system}}

{{#user~}}
场景中的角色：{{characters}}

现有剧本：
{{dialogue_history}}
{{background}}
本场景的剧情目标：{{act_goal}}

基于以上信息，请以JSON格式判断现有剧本是否包含该剧情目标。
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

NG_WORDS = ["language model", "I'm sorry,", "Sorry,", "fulfill.*request", "script line", "next line", "drama actor", "understand the instruction", "appropriate response", "director.*guidance"]

PROMPT_ACTOR_DIALOGUE_SYSTEM = """
{{#system~}}
{{name}}目前正在一部戏剧中表演。你的角色是{{name}}。

戏剧剧本背景：{{background}}

{{name}}的角色描述：{{description}}

基于上述信息，我将告诉你至今为止演出的剧本。请以{{name}}的身份进行角色扮演，并回应一句适当的台词。

不要扮演其他角色；只生成你的角色会说的内容。避免多轮回应；只生成下一行。不要重复已存在的剧本。你只能输出一行文本。

导演会指导你如何更好地体现你的角色。请考虑上下文、导演的指导、你的角色形象、记忆和对他人的印象，以生成最适合的台词。
{{~/system}}
"""

PROMPT_DIALOGUE_ASSISTANT = PROMPT_INTERVIEW_ASSISTANT = """
{{#assistant~}}
{{gen 'dialogue' temperature=0.6 frequency_penalty=0.6}}
{{~/assistant}}
"""

PROMPT_EVAL_ACT = """
{{#system~}}
Assuming you are reviewing a script for a drama. 

Given the script for an act, please evaluate the coherence and naturalness of the content using a scale from 1 to 4. A score of 1 represents significant incoherence, 2 represents slight incoherence, 3 represents general coherence, and 4 represents very high coherence.

You should output your answer as an integer in JSON format. Format example:
```
{"coherence": score from 1 to 4}
```
{{~/system}}

{{#user~}}
Act background: {{background}}

Act script: 
{{script}}

Based on information above, please score the coherence of the script in JSON format.
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_EVAL_GOAL = """
{{#system~}}
Assuming you are reviewing a script for a drama. 

Given the script for an act which is an expansion based on a plot objective. Please evaluate whether this expansion is reasonable using a scale from 1 to 4. A score of 1 represents significantly unreasonable, 2 represents slightly unreasonable, 3 represents generally reasonable, and 4 represents very reasonable.

You should output your answer as an integer in JSON format. Format example:
```
{"reasonable": score from 1 to 4}
```
{{~/system}}

{{#user~}}
Plot objective: {{goal}}

Expansion act script: 
{{script}}

Based on information above, please score the reasonable of the script in JSON format.
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_EVAL_CHARACTER = """
{{#system~}}
Assuming you are reviewing a script for a drama. 

Given the description of a character and the dialogue script containing that character. Please evaluate whether the script is consistent with the character's portrayal using a scale from 1 to 4. A score of 1 represents significant inconsistency, 2 represents slight inconsistency, 3 represents generally consistent, and 4 represents very consistent.

You should output your answer as an integer in JSON format. Format example:
```
{"consistency": score from 1 to 4}
```
{{~/system}}

{{#user~}}
Character name: {{name}}
Character description: {{description}}

Dialogue script: 
{{script}}

Based on information above, please score the consistency of {{name}} in JSON format.
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""
