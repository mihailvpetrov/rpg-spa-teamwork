class Map {
    constructor(name, ...layout, entryPoint){
        this.name = name;
        this.layout = layout; // contains the tiles layout[x][y]
        this.entryPoint = entryPoint; // character spawn location
    }
}