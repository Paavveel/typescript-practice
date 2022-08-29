"use strict";
const user = {
    login: 'ya@ya.ru',
    password: '1',
};
const multiply = (first, second) => {
    if (!second) {
        return first * first;
    }
    return first * second;
};
multiply(5);
const checkPass = (user) => {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
};
const test = (param) => {
    const t = param !== null && param !== void 0 ? param : multiply(5);
};
