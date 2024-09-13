const clc = require("cli-color");

class ColoredObjectsMap extends  Map{
    objects;
    colors;

    constructor(objects, colors) {
        super();
        this.objects = objects;
        this.colors = colors;
    }

    getMap() {
        return this.objects.map((mapCell, key) => {
            if (mapCell !== undefined) {
                mapCell = mapCell.map(line => {
                    //return line;
                    return clc.xterm(this.colors[key])(line);
                });
            }
            return mapCell;
        });

    }

}
module.exports = ColoredObjectsMap;