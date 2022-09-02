"use strict";
// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
const group = (array, key) => {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let currEl = map[itemKey];
        if (Array.isArray(currEl)) {
            currEl.push(item);
        }
        else {
            currEl = [item];
        }
        map[itemKey] = currEl;
        return map;
    }, {});
};
const res = group(data, 'group');
console.log(res);
