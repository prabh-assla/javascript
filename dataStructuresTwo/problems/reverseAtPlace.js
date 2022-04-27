function revAtPlace(...arr){
	let temp;

	for(let i=0; i<=(arr.length-1)/2; ++i){
		temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}

return arr;
}

console.log(revAtPlace(-4, 6, 1, 3, -10));
console.log(revAtPlace(-1));
console.log(revAtPlace(0, 4));