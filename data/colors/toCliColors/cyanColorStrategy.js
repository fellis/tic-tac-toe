const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class CyanColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.cyan);
    }

    toCliColor() {
        return 14;
    }
}

module.exports = CyanColorStrategy;