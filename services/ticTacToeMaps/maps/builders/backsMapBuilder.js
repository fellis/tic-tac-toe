const BacksMapDecorator = require("../implementation/backsMaps/decorators/backsMapDecorator.js");

class BacksMapBuilder {
    cellBacksFactory;

    constructor(cellBacksFactory) {
        this.cellBacksFactory = cellBacksFactory;
    }

    decorate(mapCells) {
        return new BacksMapDecorator(this.cellBacksFactory, mapCells);
    }
}
module.exports = BacksMapBuilder;