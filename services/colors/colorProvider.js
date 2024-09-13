class ColorProvider {
    colors;

    constructor(colors) {
        this.colors = colors;
    }

    getColorByOwner(owner) {
        return this.colors.find(color => color.owner === owner).color;
    }

    getColorByObjectType(objectType) {
        return this.colors.find(color => color.objectType === objectType).color;
    }

    getColorsForObjects(objects, owners, types) {
        return objects.map((object, index) => {
            if (owners[index]) {
                return this.getColorByOwner(owners[index]);
            }
            if (types[index]) {
                return this.getColorByObjectType(types[index]);
            }
        });
    }
}

module.exports = ColorProvider;