function multiples3(n, body){
	for(let i=1; i<=n; ++i){
		body(i);
	}
}

function isitmultiple(n, descripto){
	if(n%3 == 0) descripto();
}

multiples3(20, i => {
	isitmultiple(i, () => {
		console.log(i, "is a multiple!");
	});
});

