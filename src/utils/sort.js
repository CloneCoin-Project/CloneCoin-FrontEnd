export const shuffle = (array) => { 
	array.sort(() => Math.random() - 0.5); 
};


export const sortPieObjArr = (objArray) => {
	let result;

	result = objArray ? objArray.sort((a, b) => a.ratio - b.ratio).reverse() : [];
	return result;
}
