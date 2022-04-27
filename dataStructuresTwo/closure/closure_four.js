function outest(){

	let c = 20;

	function outer(b){

		function inner(){
			// let a = 19;
			console.log(a, b, c);
		}

		// let a = 10;  ---> Since the value of a is not available within the outer function or inner function or outest function scope; it will keep on searching for values in hierarchy starting from inside of INNER function till the OUTEST; since NOT FINDS ANY value of a at the end we get ((ReferenceError: a is not defined!))

		return inner;
	}
	return outer;
}

// let a = 100;
let close = (outest())("helloworld");

close();