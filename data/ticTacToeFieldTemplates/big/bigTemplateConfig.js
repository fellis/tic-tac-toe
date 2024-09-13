const ObjectOwnerType = require("../../../types/objectOwnerType.js");
const CellObjectType = require("../../../types/cellObjectType.js");
const ColorType = require("../../colors/types/colorType.js");
const TemplateConfig = require('../core/templateConfig.js')
const MapTemplateType = require('../types/mapTemplateType.js');

const CrossObject = require('./objects/crossObject.js');
const TurnNumberObject = require('./objects/turnNumberObject.js');
const ZeroObject = require('./objects/zeroObject.js');
const EmptyObject = require('./objects/emptyObject.js');

const Bottom = require('./backs/bottom.js');
const BottomLeft = require('./backs/bottomLeft.js');
const Top = require('./backs/top.js');
const TopLeft = require('./backs/topLeft.js');
const TopRight = require('./backs/topRight.js');
const BottomRight = require('./backs/bottomRight.js');
const Left = require('./backs/left.js');
const Right = require('./backs/right.js');
const Default = require('./backs/default.js');


const mapTemplateType = MapTemplateType.big;

const colors =  [
    {
        owner: ObjectOwnerType.owner,
        color: ColorType.yellow
    },
    {
        owner: ObjectOwnerType.enemy,
        color: ColorType.red
    },
    {
        objectType: CellObjectType.turnNumber,
        color: ColorType.gray
    },
    {
        objectType: CellObjectType.cellBack,
        color: ColorType.lightGray
    }
];

const backs = [
    new Bottom(),
    new BottomLeft(),
    new BottomRight(),
    new Top(),
    new TopLeft(),
    new TopRight(),
    new Left(),
    new Right(),
    new Default(),
];

const objects = [
    new CrossObject(),
    new TurnNumberObject(),
    new ZeroObject(),
    new EmptyObject()
];


const  BigTemplateConfig = new TemplateConfig(mapTemplateType, colors, backs, objects);

module.exports = BigTemplateConfig;