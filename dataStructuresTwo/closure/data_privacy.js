function a(){
	let x = 0;

	return function b(){
		++x;
		console.log(x);
	}
}

let p = a();
p(); p(); p(); p();

let q = a();
q(); q(); q();