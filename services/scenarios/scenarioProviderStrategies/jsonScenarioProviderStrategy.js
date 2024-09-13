const fs = require('fs');
const ScenarioCreationStrategy = require('./core/scenarioCreationStrategy.js');

class JsonScenarioProviderStrategy extends ScenarioCreationStrategy {
    #objectStrategy;

    constructor(objectStrategy) {
        super();
        this.#objectStrategy = objectStrategy;
    }

    createScenario(filePath) {
        try {
            const jsonData = fs.readFileSync(filePath, 'utf8');
            const scenarioData = JSON.parse(jsonData);
            return this.#objectStrategy.createScenario(scenarioData);
        } catch (error) {
            throw new Error(`Error reading or parsing JSON file: ${error.message}`);
        }
    }
}

module.exports = JsonScenarioProviderStrategy;