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

function textScripts(text){

	let i = countBy(text, char => {let script = characterScript(char.codePointAt(0)); return script ? script.name : "none"; });

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if(total == 0) return "No scripts found";

	return scripts.map(({name, count}) => {
		return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(", ");
}

console.log(textScripts('つながって"woof", 象形字象形字"fox"'));