interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role {
  roleId: number;
}
interface UserWithRole extends User, Role {
  createdAt: Date;
}

const user: UserWithRole = {
  roleId: 1,
  name: 'Pavel',
  age: 29,
  skills: ['TypeScript'],
  createdAt: new Date(),
  log(id) {
    return '';
  },
};

interface UserDictionary {
  [index: number]: User;
}
