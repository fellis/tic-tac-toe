const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class TopRightCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index === width - 1 ? CellType.topRight : null;
    }
}
module.exports = TopRightCellType;