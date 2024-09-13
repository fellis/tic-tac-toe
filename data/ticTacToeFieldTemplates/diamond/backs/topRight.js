const CellType = require('../../../../types/cellType.js')
class TopRight {

   cellType = CellType.topRight;

    back = [`---- `, [`{0}`, `|`], [`{1}`, `|`], `---- `];
}
module.exports = TopRight;