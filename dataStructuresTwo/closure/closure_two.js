function outer(b){

	function inner(){
		console.log(a, b);
	}

	let a=10;
	return inner;
}

let close = outer("hello");
close();