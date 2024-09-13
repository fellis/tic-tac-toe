class TemplateConfig {
    mapTemplateType;
    colors;
    backs;
    objects;

    constructor(mapTemplateType, colors, backs, objects) {
        this.mapTemplateType = mapTemplateType;
        this.colors = colors;
        this.backs = backs;
        this.objects = objects;
    }

    getColors() {
        return this.colors;
    }

    getMapTemplateType() {
        return this.mapTemplateType;
    }

    getBacks() {
        return this.backs;
    }

    getObjects() {
        return this.objects;
    }

}
module.exports = TemplateConfig;