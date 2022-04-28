function f3(n, x, y){
	for(let i=1; i<=n; ++i){
		x(i) + y(n-i+1);
	}
}

f3(10, i => process.stdout.write(`${2} * ${i} = ${2*i}` + " "), j => console.log(`${2} * ${j} = ${2*j}`));