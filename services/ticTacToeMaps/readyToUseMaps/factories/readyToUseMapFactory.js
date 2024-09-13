const  ClassicMap = require('../classicMap.js');
const  GomokuMap = require('../gomokuMap.js');
const  ConnectFour = require('../connectFourMap.js');
const  GameType = require('../../../../types/gameType.js');

class ReadyToUseMapFactory {
    #objectsOnMapService;
    classicMapService;
    connectFourMapService;
    gomokuMapService;

    constructor(objectsOnMapService, mapBuilderService, mapTemplatesService) {
        this.#objectsOnMapService = objectsOnMapService;
        this.classicMapService = new ClassicMap(mapBuilderService, mapTemplatesService);
        this.connectFourMapService = new GomokuMap(mapBuilderService, mapTemplatesService);;
        this.gomokuMapService = new ConnectFour(mapBuilderService, mapTemplatesService);;
    }

     getMap(gameType) {
         this.#objectsOnMapService.setStrategy(gameType);
         let mapObjects = this.#objectsOnMapService.getPosition();

        switch (gameType) {
            case GameType.classic:
                return this.classicMapService.buildMap(mapObjects);
            case GameType.gomoku:
                return this.connectFourMapService.buildMap(mapObjects);
            case GameType.connectFour:
                return this.gomokuMapService.buildMap(mapObjects);

        }
    }
}

module.exports = ReadyToUseMapFactory;