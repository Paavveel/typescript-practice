const logMiddleware = <T>(data: T): T => {
  console.log(data);
  return data;
};

const res = logMiddleware<number>(10);

const getSplitedHalf = <T>(data: Array<T>): Array<T> => {
  const l = data.length / 2;

  return data.slice(0, l);
};

getSplitedHalf<number>([1, 2, 3]);
