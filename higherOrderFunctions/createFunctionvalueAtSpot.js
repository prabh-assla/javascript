function ValuesAdder(n, action){
	for(let i=0; i<n; ++i)
		action(i);
}

let labels = [];

ValuesAdder(5, i => {
	labels.push(`Unit ${i+1}`);
});

console.log(labels);