const  TopLeftCellType = require('./strategies/topLeftCellType.js');
const  TopRightCellType = require('./strategies/topRightCellType.js');
const  TopCellType = require('./strategies/topCellType.js');
const  BottomRightCellType = require('./strategies/bottomRightCellType.js');
const  BottomLeftCellType = require('./strategies/bottomLeftCellType.js');
const  BottomCellType = require('./strategies/bottomCellType.js');
const  LeftCellType = require('./strategies/leftCellType.js');
const  RightCellType = require('./strategies/rightCellType.js');
const  DefaultCellType = require('./strategies/defaultCellType.js');

class CellTypeContext {
    #getMapSizeService;

    constructor(getMapSizeService) {
        this.#getMapSizeService = getMapSizeService;

        this.strategies = [
           new TopLeftCellType,
           new TopRightCellType,
           new TopCellType,
            new BottomRightCellType,
            new BottomLeftCellType,
            new BottomCellType,
            new LeftCellType,
            new RightCellType,
            new DefaultCellType
        ];
    }

    getCellType(index, width, height, size) {
        for (const strategy of this.strategies) {
            const type = strategy.getType(index, width, height, size);
            if (type) {
                return type;
            }
        }
        return null;
    }
}
module.exports = CellTypeContext;