class ReadyToUseMaps {

    mapBuilderService;
    mapTemplatesService;
    mapParams;

    constructor(mapBuilderService, mapTemplatesService) {
        this.mapBuilderService = mapBuilderService;
        this.mapTemplatesService = mapTemplatesService;
    }

    buildMap(mapObjects) {
        this.mapParams.objects =  mapObjects;

        this.mapTemplatesService .setConfigAsActive(this.mapParams.type);

        const mapObj = this.mapBuilderService
            .new(this.mapParams)
            .createTypesMap()
            .createBacksMap()
            .createColoredBacksMap()
            .createObjectsMap()
            .createColoredObjectsMap()
            .createFullMap()
            .createConsoleLogMap()
            .build();

        return mapObj.getMap();
    }
}
module.exports = ReadyToUseMaps;