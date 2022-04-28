function greaterThan(num1){
	return num2 => num2 > num1;
}

let greaterThan2 = greaterThan(2);

console.log(greaterThan2(2));

// function that creates a new function