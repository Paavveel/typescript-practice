"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Pavel');
const user2 = new User();
const user3 = new User(29);
const user4 = new User('Pavel', 29);
