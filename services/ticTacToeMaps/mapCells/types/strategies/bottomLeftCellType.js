const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class BottomLeftCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index === size - width ? CellType.bottomLeft : null;
    }
}
module.exports = BottomLeftCellType;