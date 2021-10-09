export const JsonToString = (json) => JSON.stringify(json);
export const ToJson = (string) => JSON.parse(string);

export const convertToFixed = (num) =>
  typeof num === 'number' ? num.toFixed(2) : num;

export const convertToFloorLocaleString = (num) =>
  typeof num === 'number' ? Math.floor(num).toLocaleString() : num;

export const convertObjArrToPropArr = (objArr, key) => {
  let output = [];
    for (var i=0; i < objArr.length ; i++)
      output.push(objArr[i][key]);
  return output;
}
  