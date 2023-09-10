import { UI } from "./UI.js";
import { tiles, tools } from "../models/constants.js";
import { Tile } from "../modules/tile.js";
import { Tool } from "../modules/tool.js";
import { World } from "./world.js";
import { Player } from "./player.js";

export class Game {
    constructor() {
        this.ui = new UI();
        this.initializeEventListeners();
        this.player = new Player();
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
        this.initializeTiles();
        this.createReset(); 
        this.world = new World(this.tilesObjects);
        this.worldBoard = this.world.generateWorld();
        this.tileBoard = this.ui.createBoard(this.worldBoard).addEventListener("click", (event) => {
            if (this.player.selectedTool) {
                if (this.player.removeItem(event.target)) {
                    this.world.removeTile(event.target);
                    this.ui.emptyGameBoard();
                    this.ui.createBoard(this.worldBoard);
                }
            }
            else if (this.player.selectedTile) {
                if (this.player.checkInventory(this.player.selectedTile)) {
                    if(this.world.addTile(event.target, this.player.selectedTile)){
                        this.player.updateInventory(this.player.selectedTile); 
                        this.ui.emptyGameBoard();
                        this.ui.createBoard(this.worldBoard);
                    };
                  
                }
            }
        });
    }

    initializeTools() {
        this.toolsObjects = [];
        tools.forEach(tool => {
            this.toolsObjects.push(new Tool(tool.name, tool.picture, tool.tile));
        })
        let toolContainer = this.ui.displayTools(this.toolsObjects);
        toolContainer.addEventListener("click", (event) => {
            if (event.target.getAttribute("name") === "Inventory") {
                if (this.ui.inventoryOpen)
                    this.ui.closeInventory();
                else this.ui.openInventory(this.player.getInventory()).addEventListener("click", (event) => {
                    if (this.player.selectInventory(event.target)) {
                        console.log(event.target.getAttribute("type"));
                        this.ui.changeCursor(event.target.getAttribute("type"));
                        this.ui.closeInventory();
                    };
                })
            }
            else {
                this.player.selectTool(event.target.getAttribute("name"), this.toolsObjects);
                this.ui.changeCursor(event.target.getAttribute("name"));
                if (this.ui.inventoryOpen)
                    this.ui.closeInventory();
            }

        });
    }
    initializeTiles() {
        this.tilesObjects = [];
        tiles.forEach(tile => {
            this.tilesObjects.push(new Tile(tile.name, tile.picture));
        })
    }
    createReset(){
        this.ui.resetBtn().addEventListener("click", (event)=>{
            this.player.resetInventory(); 
            this.ui.clearGameBoard();
            this.startGame();
        }); 
    }

}