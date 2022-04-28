function main(n, body){
	for(let i=1; i<=n; ++i)
		body(i);
}

function evenChecker(n, descripto){
	if(n%2 == 0) descripto();
}

function threeChecker(n, descripto){
	if(n%3 == 0) descripto();
}

main(50 , i => {
	evenChecker(i, () => {
		console.log(i + " -> divides by 2");
	});

	threeChecker(i, () => {
		console.log(i + " -> divides by 3");
	});
})