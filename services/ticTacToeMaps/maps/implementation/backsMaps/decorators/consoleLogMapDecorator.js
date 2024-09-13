const BacksMapDecorator = require('./backsMapDecorator.js');

class ConsoleLogMapDecorator extends  BacksMapDecorator {
    fullMapService;
    mapHeight;
    mapWidth;

    constructor(fullMapService,mapWidth, mapHeight) {
        super(fullMapService.getMap());
        this.fullMapService = fullMapService;
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
    }

    getMap() {
        const cells = this.fullMapService.getMap();
        let result = "";
        for (let mapCellKey = 0; mapCellKey < this.mapWidth * this.mapHeight; mapCellKey += this.mapWidth) {
            let sampleRowCell = cells[mapCellKey];
            for (let cellLineKey = 0; cellLineKey < sampleRowCell.length; cellLineKey++) {
                for (let cellRowKey = mapCellKey; cellRowKey < mapCellKey + this.mapWidth ; cellRowKey++) {
                   let line = cells[cellRowKey][cellLineKey];
                    result += (line.constructor.name === "Array") ? line.join('') : cells[cellRowKey][cellLineKey];
                }
                result +='\n'
            }
        }
        return result;
    }
}
module.exports = ConsoleLogMapDecorator;