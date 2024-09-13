const CellObjectType = require("../../../../types/cellObjectType.js");

class ObjectsMapBuilder {
    cellObjectsFactory;

    constructor(cellObjectsFactory) {
        this.cellObjectsFactory = cellObjectsFactory;
    }

    create(objectsDetails, width, height) {
        const size = width * height;

        let objects = objectsDetails.map((obj) =>
            (obj.type !== CellObjectType.turnNumber)
                ?
                this.cellObjectsFactory.create(obj.type)
                :
                this.cellObjectsFactory.createWithNumber(obj.type, obj.turnNumber)
        );
        for (let i = objects.length; i < size;  i++) {
            objects.push(this.cellObjectsFactory.create(CellObjectType.empty));
        }
        return objects;
    }
}
module.exports = ObjectsMapBuilder;