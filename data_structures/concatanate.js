let a = ["Live", 1, false, "Healthy", "Life", true, 4.7, 8.99];

function remove(a, x){
	return a.slice(0, x).concat(a.slice(x+1));
}

console.log(remove(a, 5));