const ConsoleLogMapDecorator = require("../implementation/backsMaps/decorators/consoleLogMapDecorator.js");

class ConsoleLogMapBuilder {

    decorate(cellsObject, width, height) {
        return new ConsoleLogMapDecorator(cellsObject, width, height);
    }

}
module.exports = ConsoleLogMapBuilder;