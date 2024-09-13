const CellStyleType = require('../../types/mapTemplateType.js')
const CellType = require('../../../../types/cellType.js')
class TopLeft {

   cellType = CellType.topLeft;

   back = [`___`,  [`|{0}`, `|`]];
}
module.exports = TopLeft;