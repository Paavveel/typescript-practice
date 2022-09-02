"use strict";
const getValue = (obj, key) => obj[key];
const user = {
    name: 'Pavel',
    age: 29,
};
const userName = getValue(user, 'name');
console.log(userName);
