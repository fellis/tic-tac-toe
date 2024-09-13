const FullMapDecorator = require("../implementation/backsMaps/decorators/fullMapDecorator.js");

class FullMapBuilder {

    decorate(mapCellsObject, objects) {
        return new FullMapDecorator(mapCellsObject, objects);
    }

}
module.exports = FullMapBuilder;