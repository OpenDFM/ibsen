# IBSEN: Director-Actor Agent Collaboration for Controllable and Interactive Drama Script Generation

该分支是IBSEN框架在RPG Maker MZ前端下的中文版本。与原始main分支下的frontend相比，我们增加了以下功能：
- 允许并发：部署到网页端后，可以让多名玩家单独进行游戏。
- 并行处理：步进时间时，将对每个演员的轮询改为并行处理，有效降低了响应时延。
- 采访演员：点击场景中的角色，可以开启与角色的临时对话。这段临时对话不会对角色知识库以及接下来的对话产生影响。

## 运行方法
与main分支下的前端运行方法类似：首先在[Google Drive](https://drive.google.com/drive/folders/1QOMYozaVcXDmc_tcPGJruVwJRW9DU18u?usp=sharing)下载好前端文件，将`mzgame-zh`目录放到该根目录下，随后在[`api_key.py`](api_key.py)提供LLM服务的API，最后在根目录下运行：
```bash
python mzgame_frontend.py --frontend_port <frontend_port>
```
网页前端会在`http://localhost:<frontend_port>`运行。使用浏览器进入到游戏界面后，需要先点击“连接服务器”按钮，输入后端服务器地址（默认情况下为http://localhost:8080），再输入`admin`作为用户名。当出现“连接成功”提示时，就可以开始游戏了。  
你也可以在[`data\username.txt`](data\username.txt)中设置允许进行游戏的用户名名单。

> 使用`gpt-4.1-nano`作为LLM时，你可能需要修改tiktoken的源文件使其能够调用该模型的tokenizer；`mzgame_frontend.py`的第20行提供了使其正常工作的方法。