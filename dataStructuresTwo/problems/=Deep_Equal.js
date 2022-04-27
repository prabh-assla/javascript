function objectEqual(a, b){
	console.log(((typeof {
	x: "earth", y : true
}) == ({
	x: "earth", y : true
}));
	if(((typeof a) == (typeof b)) && ((typeof a) == Object)){
		console.log("true!");
		if(Object.keys(a).length == Object.keys(b).length){
			for(let i=1; i<=Object.keys(a).length; ++i){

			if( Object.keys(a)[i-1] != Object.keys(b)[i-1] )
				return false;

			}

		return true;
	}
}

return false;
}

let obj = {
	x: "earth", y : true
}

let OBJ = {
	x: "earth", y : true
}

console.log(objectEqual(obj, OBJ));