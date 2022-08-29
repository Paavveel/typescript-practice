"use strict";
const logId = (id) => {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
};
logId(1);
logId('asd');
logId(true);
const logError = (err) => {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
};
const logObject = (obj) => {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
};
const logMultipleIds = (a, b) => {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
};
let a = 1;
// a = 2;
