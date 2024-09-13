const ObjectsOnMapsStrategy = require('./core/objectsOnMapStrategy.js');
const ObjectOwnerType = require("../../../types/objectOwnerType");
const CellObjectType = require("../../../types/cellObjectType");
const GameType = require("../../../types/gameType.js");

class ClassicObjectsOnMapStrategy extends ObjectsOnMapsStrategy{

    constructor() {
        super(GameType.classic);
    }

    getPosition() {
        return [
            { type: CellObjectType.turnNumber, turnNumber: 1 },
            { type: CellObjectType.turnNumber, turnNumber: 2 },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.turnNumber, turnNumber: 3 },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
        ]
    }

}
module.exports = ClassicObjectsOnMapStrategy;