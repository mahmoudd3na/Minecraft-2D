export const backgroundImg = "url('/assets/images/main-background.jpg')";
export const instructions = [
    "YOU NEED TO PICK A TOOL",
    "USE THE TOOL TO TAKE OFF A TILE FROM THE SCREEN",
    "YOU CAN PLACE THE TILE BACK WHATEVER YOU WANT"
]; 
export const tools = [
    {name : "Shovel", picture:"/assets/images/shovel.webp" ,tile :["dirt","grassDirt"]},
    {name : "Axe", picture:"/assets/images/axe.webp" ,tile :["tree","grass"]},
    {name : "Pickaxe", picture:"/assets/images/pickaxe.webp" ,tile :["stone"]},
    {name : "Vacuum", picture:"/assets/images/vacuum.png" ,tile :["white"]},
    {name : "Inventory", picture:"/assets/images/inventoryClosed.png" ,tile :"none"}
]
export const tiles = [ 
    {name:"stone", picture: "/assets/images/stone.png"}, 
    {name:"grass", picture: "/assets/images/grass.png"}, 
    {name :"tree", picture: "/assets/images/tree.png"}, 
    {name :"grassDirt", picture: "/assets/images/grassDirt.png"}, 
    {name :"dirt", picture: "/assets/images/dirt.png"},
    {name :"white", picture: "/assets/images/white.png"},
]

