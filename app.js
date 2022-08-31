"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skill) {
        if (typeof skill === 'string') {
            this.skills.push(skill);
        }
        else {
            this.skills = this.skills.concat(skill);
        }
    }
}
const user = new User();
user.addSkill('TypeScript');
user.addSkill(['React', 'Redux']);
console.log(user);
