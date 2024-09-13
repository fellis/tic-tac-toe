function replacePlaceholdersInArray(arr, values) {
    if (!arr) {
        throw new Error(`arr is undefined`);
    }

    return (arr.length > 0) ? arr.map((str, strKey) => {
        if (str === undefined) {
            throw new Error(`${str}  with strKey = ${strKey} is undefined`);
        }
        if (str.constructor.name === "Array") {
            return replacePlaceholdersInArray(str, values);
        }

        return str.replace(/{(\d+)}/g, (match, number) => {
            return (_getValueToReplace(values, number)) ? _getValueToReplace(values, number) : match;
        });

    }) : [];
}

function _getValueToReplace(values, key) {
    if (values.constructor.name === "Array") {
        return values[key];
    }
    return  values;
}

module.exports = {
    replacePlaceholdersInArray
};