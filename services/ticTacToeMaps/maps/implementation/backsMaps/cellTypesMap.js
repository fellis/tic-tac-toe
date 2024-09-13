const  Map = require('../../core/map.js')

class CellTypesMap extends  Map{
    cellTypeContextService;
    getMapSizeService;
    mapParams;

    constructor(cellTypeContextService, getMapSizeService, mapParams) {
        super();
        this.cellTypeContextService = cellTypeContextService;
        this.getMapSizeService = getMapSizeService;
        this.mapParams = mapParams;
    }

    getMap() {
        const mapSize = this.getMapSizeService.do(this.mapParams.width, this.mapParams.height);

        let result =  [];
        for (let i = 0; i < mapSize; i++) {
            result.push(this.cellTypeContextService.getCellType(i, this.mapParams.width, this.mapParams.height, mapSize));
        }
        return result;
    }
}

module.exports = CellTypesMap;