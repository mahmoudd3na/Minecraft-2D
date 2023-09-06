export class Tool { 
    constructor(name,picture,tile){
        this.name= name; 
        this.picture=picture; 
        this.tile= tile; 
    }
    getName(){
        return this.name; 
    }
    getPicture(){
        return this.picture; 
    }
    getTile(){
        return this.tile; 
    }
}