class User {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
}

const user = new User('Pavel');
console.log(user);
user.name = 'Elon';
console.log(user);

class Admin {
  role: number;
}

const admin = new Admin();
admin.role = 1;
