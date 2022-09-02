interface IUser {
  name: string;
  age: number;
}

const getValue = <T, K extends keyof T>(obj: T, key: K) => obj[key];

const user: IUser = {
  name: 'Pavel',
  age: 29,
};

const userName = getValue(user, 'name');
console.log(userName);
