const CellTypesMap = require("../implementation/backsMaps/cellTypesMap.js");
const BacksMapDecorator = require("../implementation/backsMaps/decorators/backsMapDecorator.js");
const GetColor = require("../../../colors/colorProvider.js");
const CellTypesMapBuilder = require('./cellTypesMapBuilder.js')
const BacksMapBuilder = require('./backsMapBuilder.js')
const ColoredBacksMapBuilder = require('./coloredBacksMapBuilder.js')
const ObjectsMapBuilder = require('./objectsMapBuilder.js')
const ColoredObjectsMapBuilder = require('./coloredObjectsMapBuilder.js')
const ConsoleLogMapBuilder = require('./consoleLogMapBuilder.js')
const FullMapBuilder = require("./fullMapBuilder");

class MapBuilder {
    #validator;
    #mapTemplatesContext;
    #pathToCliColors;

    constructor(validator, mapTemplatesContext, cellBacksFactory, cellObjectsFactory, pathToCliColors) {
        this.#validator = validator;
        this.#mapTemplatesContext = mapTemplatesContext;

        this.mapConfig = null;
        this.cells = null;
        this.objects = null;
        this.getColorService = null;
        this.cellTypesMapBuilder = new CellTypesMapBuilder();
        this.backsMapBuilder = new BacksMapBuilder(cellBacksFactory);
        this.coloredBacksMapBuilder = null;
        this.objectsMapBuilder = new ObjectsMapBuilder(cellObjectsFactory);
        this.coloredObjectsMapBuilder = null;
        this.fullMapBuilder = new FullMapBuilder();
        this.#pathToCliColors = pathToCliColors;
    }

    new(mapParams) {
        this.mapConfig = mapParams;
        this.getColorService = new GetColor(this.#mapTemplatesContext.getActiveConfig().getColors());
        this.coloredBacksMapBuilder = new ColoredBacksMapBuilder(this.getColorService, this.#pathToCliColors );
        this.coloredObjectsMapBuilder = new ColoredObjectsMapBuilder(this.getColorService, this.#pathToCliColors );
        this.consoleLogMapBuilder = new ConsoleLogMapBuilder();

        return this;
    }

    createTypesMap() {
        this.#validator.checkMapConfig(this.mapConfig);
        this.cells = this.cellTypesMapBuilder.create(this.mapConfig);
        return this;
    }

    createBacksMap() {
        this.#validator.checkInstance(this.cells, CellTypesMap, 'mapCells');
        this.cells = this.backsMapBuilder.decorate(this.cells);
        return this;
    }

    createColoredBacksMap() {
        this.#validator.checkInstance(this.cells, BacksMapDecorator, 'mapCells');
        this.cells = this.coloredBacksMapBuilder.decorate(this.cells);
        return this;
    }

    createObjectsMap() {
        this.#validator.checkMapConfig(this.mapConfig);
        this.objects = this.objectsMapBuilder.create(this.mapConfig.objects, this.mapConfig.width, this.mapConfig.height);
        return this;
    }

    createColoredObjectsMap() {
        this.#validator.checkArray(this.objects, 'mapObjects');
        this.objects = this.coloredObjectsMapBuilder.decorate(this.objects, this.mapConfig.objects.map(obj => obj.owner), this.mapConfig.objects.map(obj => obj.type));
        return this;
    }

    createFullMap() {
        this.#validator.checkMapConfig(this.mapConfig);
        this.#validator.checkArray(this.objects, 'mapObjects');
        this.cells = this.fullMapBuilder.decorate(this.cells, this.objects);
        return this;
    }

    createConsoleLogMap() {
        this.#validator.checkArray(this.objects, 'mapObjects');
        this.cells = this.consoleLogMapBuilder.decorate(this.cells, this.mapConfig.width, this.mapConfig.height,);
        return this;
    }

    build() {
        return this.cells;
    }
}

module.exports = MapBuilder;