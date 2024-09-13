const CellTypesMap = require("../implementation/backsMaps/cellTypesMap.js");
const CellTypeContext = require("../../mapCells/types/cellTypeContext.js");
const GetMapSize = require("../../mapSizes/getMapSize");

class CellTypesMapBuilder {
    create(mapParams) {
        return new CellTypesMap(new CellTypeContext(), new GetMapSize(), mapParams);
    }
}
module.exports = CellTypesMapBuilder;