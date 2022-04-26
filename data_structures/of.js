let a = ["be", "a", 1, 2, "mango", false];
let sum = 0;

for(let b of a){
	++sum;
	console.log(b + "\n" + a + "\n");
}

console.log(sum);