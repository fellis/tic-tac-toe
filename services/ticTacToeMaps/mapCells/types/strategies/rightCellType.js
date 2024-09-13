const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class RightCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return (index + 1 - width) % width === 0 ? CellType.right : null;
    }
}
module.exports = RightCellType;
