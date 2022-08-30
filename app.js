"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Pavel');
console.log(user);
user.name = 'Elon';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
