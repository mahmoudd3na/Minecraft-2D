import { backgroundImg, instructions } from "../models/constants.js";

export class UI {
    constructor() {
        this.gameBoard = document.querySelector("#game-board");
        this.mainPage();
        this.inventoryOpen = false; 
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
        this.toolContainer = document.createElement("div");
        tools.forEach(tool => {
            const toolDiv = document.createElement("div");
            const toolIcon = document.createElement("img");
            console.log(tool.getPicture());
            toolIcon.src = tool.getPicture();
            toolDiv.classList.add("tool-div");
            toolDiv.appendChild(toolIcon);
            toolIcon.setAttribute("name", `${tool.getName()}`);
            if (tool.getName() === "Inventory") toolDiv.setAttribute("id", "inventory");
            this.toolContainer.classList.add("tool-container");
            this.toolContainer.appendChild(toolDiv);
        })
        this.gameBoard.appendChild(this.toolContainer);
        return this.toolContainer;
    }
    createBoard(worldBoard) {
        this.tilesBoard = document.createElement("div");
        this.tilesBoard.classList.add("tiles-board");
        this.gameBoard.appendChild(this.tilesBoard);

        for (let j = 0; j < worldBoard.length; j++) {
            for (let i = 0; i <= worldBoard[j].length; i++) {
                if (typeof worldBoard[j][i] === "string") {
                    let tile = document.createElement("img");
                    tile.src = `/assets/images/${worldBoard[j][i]}.png`;
                    tile.style.gridColumnStart = `${i + 1}`;
                    tile.style.gridRowStart = `${j + 1}`;
                    tile.classList.add("tile");
                    tile.setAttribute("type", `${worldBoard[j][i]}`);
                    this.tilesBoard.appendChild(tile);
                }
                else {
                    let tile = document.createElement("div");
                    tile.style.gridColumnStart = `${i + 1}`;
                    tile.style.gridRowStart = `${j + 1}`;
                    tile.classList.add("tile");
                    tile.setAttribute("type", "nothing");
                    this.tilesBoard.appendChild(tile);
                }
            }
        }
        return this.gameBoard;
    }
    emptyGameBoard() {
        this.gameBoard.removeChild(this.tilesBoard);
    }
    openInventory(inventory) {
        this.inventoryList = document.createElement("div");
        let inventoryIconDiv = document.getElementById("inventory");
        let newIcon = inventoryIconDiv.querySelector("img");
        newIcon.src = "/assets/images/inventory-icon.png";
        this.inventoryList.classList.add("inventory-list");
        for (const key in inventory) {
            console.log(key);
            let tile = document.createElement("img");
            tile.src = `/assets/images/${key}.png`;
            tile.setAttribute("type", `${key}`);
            let num = document.createElement("p");
            num.textContent = inventory[key];
            let tileDiv = document.createElement("div");
            tileDiv.appendChild(tile);
            tileDiv.appendChild(num);
            this.inventoryList.appendChild(tileDiv);
        }
        this.gameBoard.appendChild(this.inventoryList);
        this.inventoryOpen= true; 
        return this.inventoryList; 
    }
    closeInventory(){
        this.gameBoard.removeChild(this.inventoryList);
        let inventoryIconDiv = document.getElementById("inventory");
        let newIcon = inventoryIconDiv.querySelector("img");
        newIcon.src = "/assets/images/inventoryClosed.png";
        this.inventoryOpen = false;
    }
    changeCursor(name){
        this.gameBoard.style.cursor = `url("/assets/images/${name}Cursor.png"), auto`; 
    }
    resetBtn(){
        let btn = document.createElement("button"); 
        btn.textContent = "Reset"; 
        btn.classList.add("reset-btn"); 
        this.toolContainer.appendChild(btn);
        return btn; 
    }

}