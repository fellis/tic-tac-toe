const MapWithCellsFrameStyleDecorator = require('../cellTypesMap.js');
const clc = require("cli-color");

class ColoredBacksMapDecorator extends  MapWithCellsFrameStyleDecorator{
    backsMapService;
    backsColor;

    constructor(backsMapService, backsColor) {
        super();
        this.backsMapService = backsMapService;
        this.backsColor = backsColor;
    }

    getMap() {
        return this.backsMapService.getMap().map(mapCell => {
            if (mapCell !== null) {
                mapCell = mapCell.map(line => {
                    if (line.constructor.name === "Array") {
                        return line.map(linePart => {
                            return clc.xterm(this.backsColor)(linePart);
                        });
                    }
                    return clc.xterm(this.backsColor)(line);
                });
            }
            return mapCell;
        });

    }

}
module.exports = ColoredBacksMapDecorator;