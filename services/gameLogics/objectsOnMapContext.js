class ObjectsOnMapContext{
    #strategies;
    gameType;

    constructor(...strategies) {
        this.#strategies = strategies;
    }

    setStrategy(gameType) {
        this.gameType = gameType;
    }

    getPosition() {
        for (const strategy of this.#strategies) {
            if(strategy.shouldUse(this.gameType)) {
                return strategy.getPosition();
            }
        }

    }
}
module.exports = ObjectsOnMapContext;