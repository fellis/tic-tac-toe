const CellType = require('../../../../types/cellType.js')
class Left {

   cellType = CellType.left;

   back = [[`|{0}`, `|`], [`|{1}`, `|`], ` ---- `];
}
module.exports = Left;