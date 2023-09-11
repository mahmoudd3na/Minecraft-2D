export class World {
    constructor(tiles) {
        this.stone = tiles[0];
        this.grass = tiles[1];
        this.tree = tiles[2];
        this.grassDirt = tiles[3];
        this.dirt = tiles[4];
        this.white = tiles[5];
    }
    generateWorld() {
        this.worldBoard = [];
        for (let j = 0; j < 15; j++) {
            this.worldBoard[j] = [];
            for (let i = 0; i <= 29; i++) {
                this.worldBoard[j][i] = 0;
            }
        }
        this.worldBoard[2].splice(11, 2, this.white.getName(), this.white.getName());
        this.worldBoard[3].splice(10, 4, this.white.getName(), this.white.getName(), this.white.getName(), this.white.getName());
        this.worldBoard[2].splice(24, 2, this.white.getName(), this.white.getName());
        this.worldBoard[3].splice(23, 4, this.white.getName(), this.white.getName(), this.white.getName(), this.white.getName());
        this.worldBoard[3].splice(4, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[4].splice(4, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[5].splice(4, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[6].splice(4, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[7].splice(5, 1, this.tree.getName());
        this.worldBoard[8].splice(5, 1, this.tree.getName());
        this.worldBoard[9].splice(5, 1, this.tree.getName());
        this.worldBoard[10].splice(5, 1, this.tree.getName());
        for (let i = 0; i < this.worldBoard[10].length; i++)
            this.worldBoard[11][i] = this.grassDirt.getName();
        for (let j = 12; j < this.worldBoard.length; j++)
            for (let i = 0; i < this.worldBoard[j].length; i++)
                this.worldBoard[j][i] = this.dirt.getName();

        this.worldBoard[7].splice(29, 1, this.stone.getName());
        this.worldBoard[8].splice(28, 2, this.stone.getName(), this.stone.getName());
        this.worldBoard[9].splice(27, 3, this.stone.getName(), this.stone.getName(), this.stone.getName());
        this.worldBoard[10].splice(26, 4, this.stone.getName(), this.stone.getName(), this.stone.getName(), this.stone.getName());

        this.worldBoard[6].splice(19, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[7].splice(19, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[8].splice(19, 3, this.grass.getName(), this.grass.getName(), this.grass.getName());
        this.worldBoard[9].splice(20, 1, this.tree.getName());
        this.worldBoard[10].splice(20, 1, this.tree.getName());

        return this.worldBoard;
    }
    removeTile(tile) {
        let j = tile.style.gridRowStart - 1;
        let i = tile.style.gridColumnStart - 1;
        this.worldBoard[j][i] = 0;
    }
    addTile(target, tile) {
        let j = target.style.gridRowStart - 1;
        let i = target.style.gridColumnStart - 1;
        if (this.worldBoard[j][i] === 0) {
            this.worldBoard[j][i] = tile;
            return true;
        }
        else return false;
    }
}