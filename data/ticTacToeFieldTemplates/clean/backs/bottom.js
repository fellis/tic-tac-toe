const CellStyleType = require('../../types/mapTemplateType.js')
const CellType = require('../../../../types/cellType.js')
class Bottom {

   cellType = CellType.bottom;

   back = [[`{0}`, `|`], [`{1}`, `|`], [`{2}`, `|`] , `        `];
}
module.exports = Bottom;