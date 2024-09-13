const MapTemplateType = require("../../../data/ticTacToeFieldTemplates/types/mapTemplateType.js");
const ReadyToUseMap = require('./core/readyToUseMap.js');

class ConnectFourMap  extends  ReadyToUseMap {

    constructor(mapBuilderService, mapTemplatesService) {
        super(mapBuilderService, mapTemplatesService);

        this.mapParams = {
            type: MapTemplateType.big,
            width: 7,
            height: 6,
        };
    }
}
module.exports = ConnectFourMap;