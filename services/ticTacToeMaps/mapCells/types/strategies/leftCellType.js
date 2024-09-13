const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class LeftCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index % width === 0 ? CellType.left : null;
    }
}
module.exports = LeftCellType;