class User {
  skills: string[];

  constructor() {
    this.skills = [];
  }

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      this.skills = this.skills.concat(skillOrSkills);
    }
  }
}

const user = new User();
console.log(user);
user.addSkill('TypeScript');
user.addSkill(['React', 'Redux']);
console.log(user);

function run(distance: number): void;
function run(distance: string): void;
function run(distance: number | string): number | string {
  if (typeof distance === 'number') {
    return 1;
  } else {
    return '';
  }
}

console.log(run(33));
