import { backgroundImg, instructions } from "../models/constants.js";

export class UI {
    constructor() {
        this.gameBoard = document.querySelector("#game-board");
        this.mainPage();
    }
    mainPage() {
        this.setBackgroundImg(backgroundImg);
        this.setInstructions(instructions);
    }
    clearGameBoard() {
        this.gameBoard.innerHTML = "";
        this.gameBoard.style.backgroundImage = "none";
    }
    setBackgroundImg(backgroundImg) {
        this.gameBoard.style.backgroundImage = backgroundImg;
        this.gameBoard.classList.add("background-img");
    }
    setInstructions(instructions) {
        const instructionContainer = document.createElement("ul");
        instructions.forEach(instruction => {
            const text = document.createElement("li");
            text.textContent = instruction;
            instructionContainer.appendChild(text);
        })
        instructionContainer.classList.add("instructions");
        this.gameBoard.appendChild(instructionContainer);
    }
    setStartBtn() {
        const startBtn = document.createElement("button");
        startBtn.textContent = "start game";
        startBtn.classList.add("start-btn");
        this.gameBoard.appendChild(startBtn);
        return startBtn;
    }
    displayTools(tools) {
        const toolContainer = document.createElement("div");
        tools.forEach(tool => {
            const toolDiv = document.createElement("div");
            const toolIcon = document.createElement("img");
            console.log(tool.getPicture());
            toolIcon.src = tool.getPicture();
            toolDiv.classList.add("tool-div");
            toolDiv.appendChild(toolIcon);
            toolContainer.classList.add("tool-container");
            toolContainer.appendChild(toolDiv);
        })
        this.gameBoard.appendChild(toolContainer);
    }
}