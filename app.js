const path = require('path');
const DiLoader = require('./services/diLoader/diLoader.js');
const pathToScenario =  path.resolve(__dirname, 'data/scenarios/scenario.json');
const pathToDependencies = path.resolve(__dirname, 'services.yml');

(async () => {
    await DiLoader.initialize(pathToDependencies);
    const scenario = DiLoader.getContainer().get('scenarioProvider').createScenario(pathToScenario);
    scenario.askQuestion();
})();