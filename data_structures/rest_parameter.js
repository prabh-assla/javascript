function max(...a){
	// all elements (1, -3, 4, -7, 8, 0, 23, 98) gets condensed into an array called a
	
	let result = -Infinity;

	for(let b of a){
		if(b>result) result=b;
	}

	return result;
}

console.log(max(1, -3, 4, -7, 8, 0, 23, 98));

let b = [3, 8, 9, 0];
console.log(max(...b));