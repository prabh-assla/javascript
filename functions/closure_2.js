function add3(z){
	return (x, y) => x+y+z;
}

let z = add3(10);
let x_y = z(20, 30);

console.log(x_y);