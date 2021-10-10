export const JsonToString = (json) => JSON.stringify(json);
export const ToJson = (string) => JSON.parse(string);

export const convertToFixed = (num, unit) =>
  typeof num === 'number' ? num.toFixed(unit) : num;

export const convertToFloorLocaleString = (num) =>
  typeof num === 'number' ? Math.floor(num).toLocaleString() : num;

export const convertObjArrToPropArr = (objArr, key) => {
  let output = [];
    for (var i=0; i < objArr.length ; i++)
      output.push(objArr[i][key]);
  return output;
}
  