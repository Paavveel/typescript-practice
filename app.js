"use strict";
const getFullName = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.surname}`;
};
const user = {
    firstname: 'Pavel',
    surname: 'Tomilin',
    country: 'RU',
    age: 29,
};
console.log(getFullName(user));
