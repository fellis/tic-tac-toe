const ObjectsOnMapsStrategy = require('./core/objectsOnMapStrategy.js');
const CellObjectType = require("../../../types/cellObjectType.js");
const ObjectOwnerType = require("../../../types/objectOwnerType");
const GameType = require("../../../types/gameType.js");

class ConnectFourObjectsOnMapStrategy extends ObjectsOnMapsStrategy{

    constructor() {
        super(GameType.connectFour);
    }

    getPosition() {
        return [
            { type: CellObjectType.turnNumber, turnNumber: 1 },
            { type: CellObjectType.turnNumber, turnNumber: 2 },
            { type: CellObjectType.turnNumber, turnNumber: 3 },
            { type: CellObjectType.turnNumber, turnNumber: 4 },
            { type: CellObjectType.turnNumber, turnNumber: 5 },
            { type: CellObjectType.turnNumber, turnNumber: 6 },
            { type: CellObjectType.turnNumber, turnNumber: 7 },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.zero, owner: ObjectOwnerType.enemy },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner },
            { type: CellObjectType.cross, owner: ObjectOwnerType.owner }
        ]
    }

}
module.exports = ConnectFourObjectsOnMapStrategy;