export const JsonToString = (json) => JSON.stringify(json);
export const ToJson = (string) => JSON.parse(string);

export const convertToFixed = (num) =>
  typeof num === 'number' ? num.toFixed(2) : num;

export const convertToFloorLocaleString = (num) =>
typeof num === 'number' ? Math.floor(num).toLocaleString() : num;
