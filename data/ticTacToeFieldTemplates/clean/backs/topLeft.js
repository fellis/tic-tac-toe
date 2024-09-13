const CellStyleType = require('../../types/mapTemplateType.js')
const CellType = require('../../../../types/cellType.js')
class TopLeft {

   cellType = CellType.topLeft;

   back = [`        `, [`{0}`, `|`], [`{1}`, `|`], [`{2}`, `|`] , `--------`];
}
module.exports = TopLeft;