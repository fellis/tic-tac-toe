const CellType = require('../../../../types/cellType.js')
class Top {

   cellType = CellType.top;
   back = [`---- `, [`{0}`, `|`], [`{1}`, `|`], `---- `];
}
module.exports = Top;