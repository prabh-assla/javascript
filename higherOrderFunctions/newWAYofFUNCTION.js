// print hello world "n" times!

function table(n, multiplier){

	for(let i=1; i<=n; ++i)
		multiplier(i);
}

table(10, i => console.log(`${2} * ${i} = ${2*i}` + "\n"));