const CellType = require('../../../../types/cellType.js')
class Default {

   cellType = CellType.default;

   back = [[`{0}`, `|`], [`{1}`, `|`], [`{2}`, `|`] , `--------`];
}
module.exports = Default;