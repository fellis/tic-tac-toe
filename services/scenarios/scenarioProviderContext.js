class ScenarioProviderContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    createScenario(source) {
        return this.strategy.createScenario(source);
    }
}

module.exports = ScenarioProviderContext;