const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class YellowColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.yellow);
    }

    toCliColor() {
        return 11;
    }
}

module.exports = YellowColorStrategy;