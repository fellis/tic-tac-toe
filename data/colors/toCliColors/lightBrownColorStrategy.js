const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class LightBrownColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.lightBrown);
    }

    toCliColor() {
        return 94;
    }
}

module.exports = LightBrownColorStrategy;