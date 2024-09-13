const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class LightGrayColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.lightGray);
    }

    toCliColor() {
        return 249;
    }
}

module.exports = LightGrayColorStrategy;