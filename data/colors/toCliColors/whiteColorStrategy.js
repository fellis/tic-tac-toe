const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class WhiteColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.white);
    }

    toCliColor() {
        return 15;
    }
}

module.exports = WhiteColorStrategy;