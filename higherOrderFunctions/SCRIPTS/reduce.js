function fold(array, combine, start){
let current = start;

	for(let i of array){
		current = combine(current, i);
	}

return current;
}

console.log(fold([1, -2, 3, -4, 5, -6], (a, b) => a + b, 0));
console.log([1, -2, 3, -4, 5, -6].reduce((a, b) => a + b, 0));
console.log([1, -2, 3, -4, 5, -6].reduce((a, b) => a + b));