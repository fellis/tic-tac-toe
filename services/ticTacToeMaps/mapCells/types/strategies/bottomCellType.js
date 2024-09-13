const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class BottomCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index > (size - width) ? CellType.bottom : null;
    }
}
module.exports = BottomCellType;