// closure can be defined as the combination of function along with its outer lexical environment comprising of the parent function & its variables{that are present inside the parent function}

function outer(){
	let a = 10;

	function inner(){
		console.log(a);
	}

	return inner;
}

outer()();

/* same as --> 

let a = outer();

a();

*/