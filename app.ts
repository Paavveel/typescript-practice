interface User {
  login: string;
  password?: string;
}

const user: User = {
  login: 'ya@ya.ru',
  password: '1',
};

const multiply = (first: number, second?: number): number => {
  if (!second) {
    return first * first;
  }

  return first * second;
};

multiply(5);

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}

const checkPass = (user: UserPro) => {
  const t = user.password?.type;
};

const test = (param?: string) => {
  const t = param ?? multiply(5);
};
