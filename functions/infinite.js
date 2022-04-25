function a(){
	return b();
}

function b(){
	return a();
}

console.log(a() + "is" + b());

// RangeError: Maximum call stack size exceeded