const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class BottomRightCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index === size - 1 ? CellType.bottomRight : null;
    }
}
module.exports = BottomRightCellType;