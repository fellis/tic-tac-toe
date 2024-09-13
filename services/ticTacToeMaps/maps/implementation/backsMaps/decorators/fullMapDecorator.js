const BacksMapDecorator = require('./backsMapDecorator.js');
const { replacePlaceholdersInArray } = require('../../../../../../utils/placeholderUtils.js');
class FullMapDecorator extends  BacksMapDecorator {
    backsService;
    objects;

    constructor(backsService, objects) {
        super(backsService.getMap());
        this.backsService = backsService;
        this.objects = objects;
    }

    getMap() {
        return this.backsService.getMap().map((cell, cellKey) => {
            return (cell !== null && this.objects[cellKey] ) ?
                replacePlaceholdersInArray(cell, this.objects[cellKey]) : cell
        })
    }


}
module.exports = FullMapDecorator;