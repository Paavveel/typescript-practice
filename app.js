"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
const user = new User();
console.log(user);
user.addSkill('TypeScript');
user.addSkill(['React', 'Redux']);
console.log(user);
function run(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return '';
    }
}
console.log(run(33));
