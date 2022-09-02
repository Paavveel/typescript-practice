"use strict";
const dataToString = (data) => {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
            break;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
            break;
        case 'object':
            return JSON.stringify(data);
            break;
        default:
            return undefined;
            break;
    }
};
console.log(dataToString(3));
console.log(dataToString(true));
console.log(dataToString(['a', 'b']));
console.log(dataToString({ a: 1 }));
