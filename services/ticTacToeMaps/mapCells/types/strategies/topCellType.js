const  CellType = require('../../../../../types/cellType.js');
const  CellTypeStrategy = require('./core/cellTypeStrategy.js');

class TopRCellType extends CellTypeStrategy {
    getType(index, width, height, size) {
        return index > 0 && index < width  ? CellType.top : null;
    }
}
module.exports = TopRCellType;