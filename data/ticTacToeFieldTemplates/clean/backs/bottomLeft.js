const CellStyleType = require('../../types/mapTemplateType.js')
const CellType = require('../../../../types/cellType.js')
class BottomLeft {

   cellType = CellType.bottomLeft;

   back = [[`{0}`, `|`], [`{1}`, `|`], [`{2}`, `|`] , `        `];
}
module.exports = BottomLeft;