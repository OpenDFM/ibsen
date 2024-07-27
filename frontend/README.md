# Interactive Frontend - an RPG Maker MZ Implementation
We created a simple video-game like frontend for better interaction with the IBSEN framework! 

![](https://i.imgur.com/QYYWgJT.gif)

## Installation
1. Download the game files from [Google Drive](https://drive.google.com/drive/folders/1HU1E2DnPNTholTmqAE2OwvrG22l63bZp?usp=sharing). Put the `mzgame` folder in this directory (as `frontend/mzgame`).
2. Set your OpenAI API key in `api_key.py`.
3. From root directory of this repository run
    ```
    python mzgame_frontend.py --backend_port <backend_port> --frontend_port <frontend_port>
    ```
    If no arguments provided, by default, this python backend serves on port 8080, and the HTTP frontend serves on port 8081.

4. The game frontend will be served on `http://localhost:<frontend_port>`. Use your browser to start the game!

## Guidance
### Basic control
- **Move around:** Arrow keys or mouse clicking
- **Interact with objects:** Clicking or <kbd>Space</kbd>
- **Game menu:** Button `≡` at the top-right, right mouse button or <kbd>Esc</kbd>
### IBSEN interactions
- **Step the game:** Button `>` at the top-left or <kbd>Tab</kbd>; you can also step the game using the button in the menu.
- **Talk with the actors:** <kbd>Enter</kbd>; use <kbd>Shift</kbd>+<kbd>Enter</kbd> to send out.  
When stepping the game, your utterances will be sent to the actors in the same room.

## Acknowledgements
This is an elementary demo for the IBSEN framework in video-game scenario. We sincerely thank the plugin creators (in `mzgame/js/plugins`) and the RPG Maker Forum for helping us making this game. This game is made by RPG Maker MZ (©Gotcha Gotcha Games Inc./YOJI OJIMA 2020). 