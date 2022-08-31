class User {
  skills: string[];

  constructor() {
    this.skills = [];
  }

  addSkill(skill: string | string[]): void {
    if (typeof skill === 'string') {
      this.skills.push(skill);
    } else {
      this.skills = this.skills.concat(skill);
    }
  }
}

const user = new User();
user.addSkill('TypeScript');
user.addSkill(['React', 'Redux']);
console.log(user);
