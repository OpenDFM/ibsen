PROMPT_RELATION = """
{{#system~}}
The following descriptions are events that a drama character "{{name}}" recently experienced. Please describe the current status of "{{target}}", and update the relationship between "{{name}}" and "{{target}}" according to the existing relationships. Note that do not ignore the existing relationships.
{{~/system}}

{{#user~}}
Events: {{event}}

Existed relationships of {{name}}:
{{relation}}

Please objectively and precisely summarize the current status of {{target}} and the complete relationship between {{name}} and {{target}} in 5 lines:
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.1 stream=False}}
{{~/assistant}}
"""

PROMPT_UPDATE_IMPRESSION = """
{{#system~}}
The following descriptions are events that a drama character "{{name}}" recently experienced. Given the {{name}}'s impressions on "{{target}}" before, you should summarize how would {{name}} think of {{target}} after experiencing those events in 3 lines. Note that do not ignore the existing impressions.
{{~/system}}

{{#user~}}
Impressions on {{target}} before:
{{impression}}

Events: {{events}}

After these events, what would {{name}} think of {{target}}? Please summarize {{name}}'s current impression of {{target}} in 3 lines.  
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False}}
{{~/assistant}}
"""

PROMPT_INFLUENCE = """
{{#system~}}
Assuming that you are role-playing a drama character named "{{name}}". The following description is the memory entry that you have already known. If the description could directly, evidently influence the images and behaviors of {{name}}, output 1; otherwise output 0. You should only output an integer. 
{{~/system}}

{{#user~}}
{{name}} comes from a prominent background, with his/her father being a general, often referred to in the media as "the general's child". 

{{~/user}}
{{#assistant~}}
1
{{~/assistant}}

{{#user~}}
{{name}} has a personal assistant who records all the agenda of {{name}}.
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
{{name}} is a drama character. {{instruction}}
You need to follow the description above to role-play this character. Given the event that {{name}} has experienced and his/her memories related to the event, you need to characteristically recount this event from the perspective of {{name}} in 2 lines.
{{~/system}}

{{#user~}}
{{name}} experienced this event:
{{event}}

Interpersonal relationships related to the event:
{{relations}}

{{name}}'s past memories related to the event:
{{memories}}

Having experienced this event, what would you think if you were {{name}}? Using the first-person tone of {{name}}, recount the event precisely and characteristically in 2 lines:
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.3 stream=False}}
{{~/assistant}}
"""

PROMPT_SUMMARIZE_SYSTEM = """
{{#system~}}
You are an actor preparing for a drama. You are going to role-play the character named {{name}}.

The following lines are dialogues that happened between your character and other characters. From the perspective of {{name}}, summarize the dialogue history point by point based on the topics.

You should output the response in the format of JSON. Format example:
```
{"summary": ["Summary point 1", "Summary point 2", ...]}
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
{{name}} is a character in a drama. Given the background profile of this character, you should summarize how {{name}} would think of other characters. The summary of each character is limited to 5 lines.
If the background profile does not mention some characters, you should regard that {{name}} has no impressions on those characters.

You should output the response in the format of JSON. Format example:
```
{"Character 1": "Impression 1", "Character 2": "Impression 2", ...}
```
{{~/system}}

{{#user~}}
Following the chronological order, the background profiles of {{name}} are:
{{memories}}

Please respectively output the {{name}}'s impressions on the characters below in JSON format. If the character is not mentioned in the background profile, you should regard that {{name}} has no impression on that character.
{{characters}}
{{~/user}}

{{#assistant~}}
{{gen 'ans' stream=False max_tokens=2000 response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_MONOLOGUE = """
{{#system~}}
Give you a drama character "{{name}}" and his/her monologue. After the monologue, this character experienced a series of events, and the psychology of the character may have shifted.
Based on the existing monologue and the events {{name}} has experienced afterward, you should role-play this character according to the instruction, and generate a new monologue in the first-person tone.
{{~/system}}

{{#user~}}
{{name}}'s monologue before:
{{monologue}}

After that, the character chronologically experienced these events:
{{memories}}

Instruction to role-playing {{name}}:
{{instruction}}

Having experienced these events, what would you think or do if you were {{name}}? According to the instruction, please characteristically summarize {{name}}'s monologue in 10 lines.
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.3 stream=False}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_OUTLINE = """
{{#system~}}
Assuming you are currently a director, guiding a scene in a drama.

Given the characters and the existing script for this scene, please first summarize what has happened in the plot so far.

Then, based on the relationships and impressions between characters, you are asked to write a detailed continuation for the upcoming script. Ensure that the combined plot of the current scene and the continuation adheres to the given plot objective, and the specific content of the script is more related to the characters' images.

The existing script may have partially achieved the current plot objective. You must strictly follow the requirements of the plot objective, continuing the existing script and gradually developing the plot. Be cautious not to disregard the existing script or create plot developments beyond the specified plot objective.

Your generated plot guidance should be descriptive about what will happen next, without using a dialogue script format. Do not include events that have already occurred in the existing script, and refrain from prematurely generating events beyond reaching the plot objective. Characters in the plot must be in the scene.

You should summarize the existing script and give the continuation for the upcoming script in JSON format. Format example: 
```
{"previous_outline": "Summary of the existing script", "new_outline": "Continuation for the upcoming script"}
```
{{~/system}}

{{#user~}}
Characters in the scene: {{characters}}
Your plot cannot include any characters that are not in the scene.

Character descriptions:
{{descriptions}}

Relations between characters:
{{relations}}

Impressions between characters:
{{impressions}}

The existing script:
{{dialogue_history}}

Please summarize the plot of the existing script first.
{{background}}
Performace goal in the next: {{act_goal}}

Character memories related to the plot objective:
{{memories}}
These memories above have already occurred in the past. You should refer to them to create the outline.

Based on the information above, how should the plot develop next? Provide a detailed continuation for the upcoming plot, seamlessly connecting with the previous script to make the plot and character images relevant. Ensure the entire plot progresses towards the plot objective. You should output in JSON format.
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 max_tokens=2000 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_SCRIPT = """
{{#system~}}
Assuming you are currently a director, guiding a scene in a drama.

Given the characters and the outline of the upcoming plot for this scene, please translate the upcoming plot outline into script format for up to {{num_lines}} lines, ensuring that it follows the storyline and seamlessly connects with the preceding script.

You can gradually develop the script, enriching the details based on the upcoming plot outline. If you manage to cover all the outlined events before reaching {{num_lines}} lines, you can end your writing.

Make sure your continuation smoothly integrates with the existing script. Use character dialogues to replace Narration wherever possible.

You should output the script continuation in JSON format. Each line of the script includes the speaker "role" and his/her utterance "content". The speaker can only be chosen from Narration or one of the characters in the scene. Format example:
```
{"scripts": [{"role": "Speaker 1", "content": "..."}, {"role": "Speaker 2", "content": "..."}, {"role": "Narration", "content": "..."}, ...]}
```
{{~/system}}

{{#user~}}
Characters in the scene: {{characters}}

Relations between characters:
{{relations}}

Existing plot outline:
{{prev_outline}}
{{background}}
Upcoming plot outline:
{{act_outline}}

Based on the above information, please translate the upcoming plot outline into script format up to {{num_lines}} lines in JSON format. Ensure that the extended script seamlessly integrates with the existing one and follows the upcoming plot outline. Note that the speaker can only be Narration or one of the characters in this scene. Use character dialogues to replace Narration wherever possible.
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 max_tokens=1000 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_INSTRUCT = """
{{#system~}}
Assuming you are currently a director, guiding a scene in a drama.

Given the characters, the plot objective of this scene and the existing script, please provide a brief synopsis of the upcoming line for the actor. However, do not directly provide the original script line.

Then, use keywords to instruct the actor on how to role-play the character in the next line, so that the actor can play out the dialogue that fits the script, the characterization and the plot objective.
{{~/system}}

{{#user~}}
Characters in the scene: {{characters}}

Relations between characters:
{{relations}}

Existing script: 
{{dialogue_history}}
{{background}}
Plot objective of this scene: {{act_goal}}

According to the script, the character of the following line is {{actor_name}}, and the line content is: {{content}}.
However, do not directly provide the original line for the actor that is role-playing this character.

Description of the {{actor_name}}: {{description}}

Based on the above information, please provide a brief synopsis of the upcoming line for the actor, but do not directly provide the original script line. Then, generate several keywords to instruct the actor how to play out the dialogue that fits the script, the plot objective and the characteristics of {{actor_name}}.
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 presence_penalty=0.6 stream=False}}
{{~/assistant}}
"""

PROMPT_DIRECTOR_CHECK_GOAL = """
{{#system~}}
Assuming you are currently a director, guiding a scene in a drama.

Given the characters and the plot objective of this scene, please determine whether the existing script has included the plot objective.

You should output your answer in JSON format. Give your result in "completed", and explain your reason in "reason". Format example:
```
{"completed": true or false, "reason": "Your reason"}
```
{{~/system}}

{{#user~}}
Characters in the scene: {{characters}}

Existing script:
{{dialogue_history}}
{{background}}
Plot objective of the scene: {{act_goal}}

Based on the information above, please determine whether the existing script has included the plot objective in JSON format.
{{~/user}}

{{#assistant~}}
{{gen 'ans' temperature=0.6 stream=False response_format={ "type": "json_object" }}}
{{~/assistant}}
"""

NG_WORDS = ["language model", "I'm sorry,", "Sorry,", "fulfill.*request", "script line", "next line", "drama actor", "understand the instruction", "appropriate response", "director.*guidance"]

PROMPT_ACTOR_DIALOGUE_SYSTEM = """
{{#system~}}
Assuming you are currently an actor performing in a drama play. Your role is {{name}}.

Background of the drama script: {{background}}

Character description for {{name}}: {{description}}

Based on the information above, I will tell you the script that has unfolded so far in the play. Please role-play as {{name}} and respond with an appropriate line of the dialogue.

Do not role-play other characters; generate only what your character would say. Avoid multi-turn responses; generate only the next line. Do not repeat the existing script. You can output only one line of text.

A director will guide you on how to better embody your role. Consider the context, director's guidance, your character's image, memories, and impressions on others to generate the most fitting line of dialogue as an actor.
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
