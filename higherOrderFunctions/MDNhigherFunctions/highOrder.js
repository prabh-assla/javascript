//functions that return functions are known as higher order functions...

function externa(){
	return function interna(){
		console.log("hello world!");
	}
}

externa()();