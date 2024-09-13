class MapValidator {
    checkMapConfig(mapParams) {
        if (!mapParams) {
            throw new Error('MapParams is undefined. Please execute new(mapParams) method first.');
        }
    }

    checkInstance(property, instanceType, propertyName) {
        if (!(property instanceof instanceType)) {
            throw new Error(`${propertyName} must be an instance of ${instanceType.name}.`);
        }
    }

    checkArray(property, propertyName) {
        if (!Array.isArray(property)) {
            throw new Error(`${propertyName} is not defined or not an array. Please ensure previous methods are called.`);
        }
    }
}

module.exports = MapValidator;