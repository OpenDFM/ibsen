# IBSEN: Director-Actor Agent Collaboration for Controllable and Interactive Drama Script Generation

**IBSEN** is an original collaborative framework in the field of drama playing and script generation. Powered by LLM-based generative agents and the surveillance of the director agent, actor agents in the drama play could act towards the desired plot objectives and present their personality at the same time. This framework also allows human players to involve in the play and interact with the actors, while keeping the plot progressing towards the objective. Our paper is accepted by ACL 2024 Main. 

![](https://i.imgur.com/6dZHh52.png)

This repository provides a simple terminal frontend to interact with IBSEN.

### 🎉News: We have released a video-game frontend to interact with IBSEN! Check [frontend/](frontend/) for details.

## Installation
**NOTE:** We recommend creating a virtual environment to install dependencies because some of the package versions we use are relatively old and their behavior may be incompatible with newer versions of the packages.
```
pip install -r requirements.txt
```

## Launch Frontend (Terminal)
By default we use the `gpt-4o-mini` as the backbone LLM. You should provide your OpenAI API key in [`api_key.py`](api_key.py) first, then directly launch the [`terminal_frontend.py`](terminal_frontend.py):
```
python terminal_frontend.py
```

## Launch Frontend (mzgame)
See [here](frontend/README.md) for details. You should still provide your OpenAI API key in [`api_key.py`](api_key.py) first.

## Use Your Own Script Settings
The [`data`](data) directory contains all the script settings required by the IBSEN. You may customize these files to use IBSEN in your own drama scenarios.
- [`data/script`](data/script) includes the script settings of the whole stage. You can follow the format of [our script](data/script/hedda_gabler_modern.json) to create your own stage.
- [`data/profile`](data/profile) includes the character profiles used by the actor agents. The profile file names should be the same as the character names defined in the script settings. You can follow the format of [our profile](data/profile/Hedda%20Gai.json) to create a new character profile.
  - You can set the event monologue with an empty string; in this case, the actor agent will generate a monologue for the event.
- If you have dialogue corpora for certain characters, you can place them in [`data/corpus`](data/corpus/) to provide references for the actor agents. The corpus file names should be the same as the character names defined in the script settings. You can follow the format of [our corpus](data/corpus/example.csv) to build the corpus.

## Citation
```bibtex
@misc{han2024ibsendirectoractoragentcollaboration,
      title={IBSEN: Director-Actor Agent Collaboration for Controllable and Interactive Drama Script Generation}, 
      author={Senyu Han and Lu Chen and Li-Min Lin and Zhengshan Xu and Kai Yu},
      year={2024},
      eprint={2407.01093},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2407.01093}, 
}
```