export class Player {
    constructor() {
        this.inventory = {
            stone: 0,
            dirt: 0,
            grass: 0,
            grassDirt: 0,
            tree: 0,
            white: 0
        }
        this.selectedTool = false;
        this.selectedTile = false;
    }
    updateInventory(tile) {   // to update the inventory when i add an item to the board so i subtract from inventory
        this.inventory[tile]--;
    }
    checkInventory(tile) {
        if (this.inventory[tile] > 0)
            return true;
        else return false;
    }
    removeItem(tile) {
        if (this.selectedTool)
            if (this.selectedTool.getTile().includes(tile.getAttribute("type"))) {
                this.inventory[`${tile.getAttribute("type")}`]++;
                return true;
            }
    }
    selectInventory(tile) {
        const key = tile.getAttribute("type");
        if (this.inventory[key] === 0) {
            tile.style.border = "0.5vmin red solid";
            setTimeout(() => {
                tile.style.border = "none";
            }, "1000");
        }
        else {
            this.selectedTile = tile.getAttribute("type");
            this.selectedTool = false;
            return true;
        }
    }

    selectTool(tool, toolsObjects) {
        for (let element of toolsObjects)
            if (tool === element.getName())
                this.selectedTool = element;
        this.selectedTile = false;
    }
    getSelectedTool() {
        return this.selectedTool;
    }
    getInventory() {
        return this.inventory;
    }
    resetInventory(){
        this.inventory = {
            stone: 0,
            dirt: 0,
            grass: 0,
            grassDirt: 0,
            tree: 0,
            white: 0
        }
    }
}