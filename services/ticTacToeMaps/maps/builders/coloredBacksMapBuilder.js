const ColoredBacksMapDecorator = require("../implementation/backsMaps/decorators/coloredBacksMapDecorator.js");
const ColorToCliColorAdapter = require("../../../colors/adapters/colorToCliColorAdapter.js");
const CellObjectType = require("../../../../types/cellObjectType");

class ColoredBacksMapBuilder {
    constructor(getColorService, pathToCliColors) {
        this.getColorService = getColorService;
        this.pathToCliColors = pathToCliColors;
    }

    decorate(mapCells) {
        return new ColoredBacksMapDecorator(
            mapCells,
            new ColorToCliColorAdapter(this.getColorService.getColorByObjectType(CellObjectType.cellBack), this.pathToCliColors).color
        );
    }
}
module.exports = ColoredBacksMapBuilder;