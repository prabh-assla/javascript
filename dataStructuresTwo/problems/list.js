function listMaker(...arr){
let list = null;

for(let i=arr.length-1; i>=0; --i){
		list = {
			value : arr[i],
			rest : list
		}
}
return list;
}

console.dir(listMaker(1, 2, 3, 7, 9, 10, 11), {depth: null});
// console.log(listMaker(1, 2, 3, 7, 9, 10, 11));