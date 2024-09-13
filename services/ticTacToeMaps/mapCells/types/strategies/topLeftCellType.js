
const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class TopLeftCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index === 0 ? CellType.topLeft : null;
    }

}
module.exports = TopLeftCellType;