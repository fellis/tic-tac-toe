const ColorStrategy = require('../../../services/colors/strategies/core/colorStrategy.js');
const ColorType = require('../types/colorType.js');

class BrownColorStrategy extends ColorStrategy {
    constructor() {
        super(ColorType.brown);
    }

    toCliColor() {
        return 173;
    }
}

module.exports = BrownColorStrategy;