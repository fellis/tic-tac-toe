const CellType = require('../../../../types/cellType.js')
class BottomLeft {

   cellType = CellType.bottomLeft;

   back = [[`|{0}`, `|`], `\u203E\u203E\u203E`];
}
module.exports = BottomLeft;