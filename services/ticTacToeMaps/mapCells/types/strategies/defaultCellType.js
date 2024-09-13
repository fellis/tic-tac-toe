const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class DefaultCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return CellType.default;
    }
}
module.exports = DefaultCellType;