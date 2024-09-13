const CelObjectType = require('../../../../types/cellObjectType.js')

class EmptyObject {
    cellObjectType = CelObjectType.empty;

    object = [`    `, `    `];
}
module.exports = EmptyObject;