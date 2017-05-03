class Map {
    constructor(name, ...layout, entryPoint){
        this._name = name;
        this._layout = layout; // contains the tiles layout[x][y]
        this._entryPoint = entryPoint; // character spawn location
    }
}