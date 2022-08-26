const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
  console.log(skill.toLowerCase());
}

const result = skills
  .filter(s => s !== 'DevOps')
  .map(s => s + '! ')
  .reduce((a, b) => a + b);

console.log(result);
