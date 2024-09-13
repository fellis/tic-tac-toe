const BigTemplateConfig = require("../../../../data/ticTacToeFieldTemplates/big/bigTemplateConfig.js");
const CleanTemplateConfig = require("../../../../data/ticTacToeFieldTemplates/clean/cleanTemplateConfig.js");
const SmallTemplateConfig = require("../../../../data/ticTacToeFieldTemplates/small/smallTemplateConfig.js");
const DiamondTemplateConfig = require("../../../../data/ticTacToeFieldTemplates/diamond/diamondTemplateConfig.js");

class MapTemplatesContext {
    templateConfigs;
    activeConfig;

    constructor() {
        this.templateConfigs = [
            BigTemplateConfig,
            CleanTemplateConfig,
            SmallTemplateConfig,
            DiamondTemplateConfig
        ]
    }

    setConfigAsActive(configType) {
        this.activeConfig = configType;
    }

    getActiveConfig() {
        return this.getConfig(this.activeConfig);
    }

    getConfig(configType) {
        return this.templateConfigs.find(config => config.mapTemplateType === configType);
    }


}

module.exports = MapTemplatesContext;