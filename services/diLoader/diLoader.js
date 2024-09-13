
const { ContainerBuilder, YamlFileLoader } = require('node-dependency-injection');
const path = require('path');

class DiLoader {
    static container = null;

    constructor() {
    }

    static async initialize(pathToConfigFile) {
        if (!DiLoader.container) {
            DiLoader.container = new ContainerBuilder();
            const loader = new YamlFileLoader(DiLoader.container);
            await loader.load(pathToConfigFile);
        }
    }

    static getContainer() {
        if (!DiLoader.container) {
            throw new Error('Container has not been initialized. Call DiLoader.initialize() first.');
        }
        return DiLoader.container;
    }
}

module.exports = DiLoader;