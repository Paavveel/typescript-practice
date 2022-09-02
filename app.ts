// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.

// Пример:
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];

// При группировке по 'group' ---->
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }

interface IData {
  group: number;
  name: string;
}

const data: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T[];
}

type key = string | number | symbol;

const group = <T extends Record<key, any>>(
  array: T[],
  key: keyof T
): IGroup<T> => {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let currEl = map[itemKey];
    if (Array.isArray(currEl)) {
      currEl.push(item);
    } else {
      currEl = [item];
    }
    map[itemKey] = currEl;
    return map;
  }, {});
};

const res = group<IData>(data, 'group');
console.log(res);
