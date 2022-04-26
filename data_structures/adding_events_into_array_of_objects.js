let a = [];

function addingTOobject_a(x, y){
	a.push({x, y});
}

console.log(a);

addingTOobject_a(["be", "happy"], false);
addingTOobject_a(["stay", "pretty"], true);
addingTOobject_a(["he", "is", "me"], false);

console.log(a);