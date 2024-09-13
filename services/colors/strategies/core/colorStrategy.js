class ColorStrategy {
    constructor(colorType) {
        this.colorType = colorType;
    }

    toCliColor() {
        throw new Error('toCliColor method must be implemented');
    }
}

module.exports = ColorStrategy;