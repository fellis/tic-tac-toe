const CellType = require('../../../../types/cellType.js')
class BottomLeft {

   cellType = CellType.bottomLeft;

   back = [[`|{0}`, `|`], [`|{1}`, `|`], [`|{2}`, `|`] , `--------`];
}
module.exports = BottomLeft;