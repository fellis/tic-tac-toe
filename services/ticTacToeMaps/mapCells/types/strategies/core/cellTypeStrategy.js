class CellTypeStrategy {
    getType(index, width, height, size) {
        throw new Error('This method should be overridden');
    }
}
module.exports = CellTypeStrategy;