let a = function(x, y){
	let b = function(p, q, r, s){
		return p+q+r+s;
	}

	return b(x, y, x+y, y-x);
}

console.log(a(5, 5));