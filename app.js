"use strict";
const logMiddleware = (data) => {
    console.log(data);
    return data;
};
const res = logMiddleware(10);
const getSplitedHalf = (data) => {
    const l = data.length / 2;
    return data.slice(0, l);
};
getSplitedHalf([1, 2, 3]);
