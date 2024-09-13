const ColoredObjectsMap = require("../implementation/coloredObjectsMaps/coloredObjectsMap.js");
const ColorToCliColorAdapter = require("../../../colors/adapters/colorToCliColorAdapter.js");

class ColoredObjectsMapBuilder {
    constructor(getColorService, pathToCliColors) {
        this.getColorService = getColorService;
        this.pathToCliColors = pathToCliColors;
    }

    decorate(mapObjects, owners, types) {
        return new ColoredObjectsMap(mapObjects,
            this.getColorService.getColorsForObjects(mapObjects, owners, types).map((color) => {
                 const colorAdapter = new ColorToCliColorAdapter(color, this.pathToCliColors)
                return colorAdapter.color;
            })

        ).getMap();
    }
}
module.exports = ColoredObjectsMapBuilder;