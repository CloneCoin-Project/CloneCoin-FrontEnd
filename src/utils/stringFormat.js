export function stringFormat() {
	/**
	 * stringFormat 함수의 0번째 인자를 이후의 인자로 포맷팅하여 반환합니다. (함수를 변수화하면 arguments 객체 X)
	 * e.g. stringFormat('{0} + {1} = {2}', 3, 6, 9); -> '3 + 6 = 9'
	 * @return {String}	
	*/
	let args = arguments; 
	
	return args[0].replace(/{(\d+)}/g, function(match, num) { 
		num = Number(num) + 1; 
		return typeof(args[num]) != undefined ? args[num] : match; 
	}); 
}

export const insertCommaToNumber = (num) => {
	/**
	 * 숫자단위를 1000단위로 쉼표를 삽입하여 반환합니다.
	 * e.g. insertCommaToNumber(100000000) -> 100,000,000
	 * @param  {Number} num   A Number to be inserted
	 * @return {String}       A String comma-inserted from Number
	 */
	return (num == undefined) ? 0 : num.toLocaleString('ko-KR');
}