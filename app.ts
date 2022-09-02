const nums: Array<number> = [1, 2, 3];

const test = async () => {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
};

const check: Record<string, boolean> = {
  drive: true,
  transmission: false,
};
