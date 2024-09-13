const MapTemplateType = require("../../../data/ticTacToeFieldTemplates/types/mapTemplateType.js");
const ReadyToUseMap = require('./core/readyToUseMap.js');

class ClassicMap  extends  ReadyToUseMap{

    constructor(mapBuilderService, mapTemplatesService) {
        super(mapBuilderService, mapTemplatesService);

        this.mapParams = {
            type: MapTemplateType.diamond,
            width: 3,
            height: 3,
        };
    }
}
module.exports = ClassicMap;