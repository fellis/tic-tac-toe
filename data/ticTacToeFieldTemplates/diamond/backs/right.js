const CellType = require('../../../../types/cellType.js')
class Right {

   cellType = CellType.right;
   back = [[`{0}`, `|`], [`{1}`, `|`], `---- `];
}
module.exports = Right;