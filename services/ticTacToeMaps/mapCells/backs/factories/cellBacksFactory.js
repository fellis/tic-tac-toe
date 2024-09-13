class CellBacksFactory {
    #mapTemplatesContext;

    constructor(mapTemplatesContext) {
        this.#mapTemplatesContext = mapTemplatesContext;
    }

    create (cellType) {
        const  backs = this.#mapTemplatesContext.getActiveConfig().getBacks();
        for (const back of backs) {
            if (back.cellType === cellType)  {
                return Object.create(back.back);
            }
        }
        return null;
    }

}
module.exports = CellBacksFactory;