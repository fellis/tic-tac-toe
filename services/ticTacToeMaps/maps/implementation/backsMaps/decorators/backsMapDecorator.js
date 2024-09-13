const MapCellWithType = require('../cellTypesMap.js');

class BacksMapDecorator extends MapCellWithType{
    typesMap;
    cellBacksFactory;

    constructor(cellBacksFactory, typesMap) {
        super();
        this.typesMap = typesMap;
        this.cellBacksFactory = cellBacksFactory;
    }

    getMap() {
        const mapParams = this.typesMap.mapParams;
        return this.typesMap.getMap().map(map => {
            return (map !== undefined) ?  this.cellBacksFactory.create(map) : undefined;
        })
    }
}
module.exports = BacksMapDecorator;