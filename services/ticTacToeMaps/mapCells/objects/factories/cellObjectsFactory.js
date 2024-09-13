const { replacePlaceholdersInArray } = require('../../../../../utils/placeholderUtils.js');
const CellObjectType = require("../../../../../types/cellObjectType.js");

class CellObjectsFactory {
    #mapTemplatesContext;

    constructor(mapTemplatesContext) {
        this.#mapTemplatesContext = mapTemplatesContext;
    }

    create (cellObjectType) {
        const objects = this.#mapTemplatesContext.getActiveConfig().getObjects();
        for (const object of objects) {
            if (object.cellObjectType === cellObjectType)  {
                return Object.create(object.object);
            }
        }
        return Object.create(CellObjectType.empty);
    }

    createWithNumber (cellObjectType, textToReplace) {
        const object = this.create(cellObjectType);
        return (object) ? replacePlaceholdersInArray(this.create(cellObjectType), [textToReplace] ) :  null;
    }

}
module.exports = CellObjectsFactory;