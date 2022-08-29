// Type Aliases

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User & Role; // Intersection

const user: UserWithRole = {
  id: 1,
  name: 'Pavel',
  age: 29,
  skills: ['TypeScript'],
};
