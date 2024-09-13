const Color = require('./../color.js');
const fs = require('fs');
const path = require('path');

class ColorToCliColorAdapter  extends  Color{

    constructor(color, directoryPath) {
        super();
        this.directoryPath = directoryPath;
        this.colorStrategies = {};
        this.loadColorStrategies();
        this.color =  this.getColorStrategy(color);
    }

    loadColorStrategies() {
        const colorFiles = fs.readdirSync(this.directoryPath);

        colorFiles.forEach(file => {
            if (file.endsWith('.js')) {
                const StrategyClass = require(path.join('../../../', this.directoryPath, file));
                if (typeof StrategyClass === 'function' && typeof StrategyClass.prototype.toCliColor === 'function') {
                    const strategyInstance = new StrategyClass();
                    this.colorStrategies[strategyInstance.colorType] = strategyInstance;
                }
            }
        });
    }

    getColorStrategy(colorType) {
        return this.colorStrategies[colorType].toCliColor();
    }


}
module.exports = ColorToCliColorAdapter;