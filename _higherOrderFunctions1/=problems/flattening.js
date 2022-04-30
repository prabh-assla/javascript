console.log([[1, 2, 3], [2, 1, 5], [6], [1, 3, 7]].reduce((a,b) => a.concat(b)));

// my failed attempt in creating a pure function that flattens array of array of arrays ----->

// function flatten(arr){
// 	let map = [], done = false, mapper = [];
	
// 	for(let i of arr)
// 		map.push(i);

// 	while(done == false){
// 	map = map.reduce((a, b) => { if(Array.isArray(a) == true && Array.isArray(b) == true) a.concat(b); if(Array.isArray(a) == true && Array.isArray(b) == false)});
// 		console.log(map);

// 		console.log(map[3]);
// 	for(let i of map){
// 		if( Array.isArray(i) == true ){
// 			done == false;
// 			break;
// 		}

// 		else
// 			done == true;
// 	}

// 	console.log(done);
// }

// return map;
// }

// console.log(flatten([[1, 2, 3], [2, [1], 5], [6], [1, 3, 7]]));