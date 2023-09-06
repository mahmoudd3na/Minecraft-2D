import { UI } from "./UI.js";
import { tiles, tools } from "../models/constants.js";
import { Tile } from "../modules/tile.js";
import { Tool } from "../modules/tool.js";

export class Game {
    constructor() {
        this.ui = new UI();
        this.initializeEventListeners();
    }
    initializeEventListeners() {
        const startBtn = this.ui.setStartBtn();
        startBtn.addEventListener("click", () => {
            this.ui.clearGameBoard();
            this.startGame();
        })
    }
    startGame() {
        this.initializeTools();
    }

    initializeTools(){
        const toolsObjects = [];
        tools.forEach(tool => {
            toolsObjects.push(new Tool(tool.name, tool.picture, tool.tile));
        })
        this.ui.displayTools(toolsObjects); 
    }

}