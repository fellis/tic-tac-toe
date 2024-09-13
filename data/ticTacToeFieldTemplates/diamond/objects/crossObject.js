const CelObjectType = require('../../../../types/cellObjectType.js')

class CrossObject {
    cellObjectType = CelObjectType.cross;

    object = [` \\/ `, ` /\\ `];
}
module.exports = CrossObject;