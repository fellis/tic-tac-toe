class ObjectsOnMapsStrategy {

    constructor(gameType) {
        this.gameType = gameType;
    }

    getPosition() {
        throw new Error('getPosition method is not implemented');
    }

    shouldUse(activeGameType) {
        return activeGameType === this.gameType;
    }

}
module.exports = ObjectsOnMapsStrategy;