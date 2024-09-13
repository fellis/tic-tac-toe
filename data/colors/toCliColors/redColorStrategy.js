const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class RedColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.red);
    }

    toCliColor() {
        return 9;
    }
}

module.exports = RedColorStrategy;