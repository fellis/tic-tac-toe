const MapTemplateType = require("../../../data/ticTacToeFieldTemplates/types/mapTemplateType.js");
const ReadyToUseMap = require('./core/readyToUseMap.js');

class GomokuMap  extends  ReadyToUseMap {

    constructor(mapBuilderService, mapTemplatesService) {
        super(mapBuilderService, mapTemplatesService);

        this.mapParams = {
            type: MapTemplateType.small,
            width: 15,
            height: 15,
        };
    }
}
module.exports = GomokuMap;