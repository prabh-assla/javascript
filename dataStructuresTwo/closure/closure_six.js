function outest(){

	let c = 20;

	function outer(b){

		function inner(){
			let a;
			console.log(a, b, c);
		}

		return inner;
	}
	return outer;
}

let close = outest()("helloworld");

close();