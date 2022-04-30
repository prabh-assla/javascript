function countBy(i, j){
	let count = [];

	for(let x of i){
		let name = j(x);
		let known = count.findIndex(c => c.name == name);

		if(known == -1){
			count.push({name, count : 1});
		}

		else {
			count[known].count++;
	}
}

return count;
}

console.log(countBy([1, 4, 8, 2], n => n > 2));