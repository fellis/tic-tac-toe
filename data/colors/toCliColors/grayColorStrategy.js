const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class GrayColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.gray);
    }

    toCliColor() {
        return 237;
    }
}

module.exports = GrayColorStrategy;