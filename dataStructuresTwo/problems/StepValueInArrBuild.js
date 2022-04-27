function arrDisplay(x, y, z){

	let arr=[];

if(z>0)
	for(let i=x; i<=y; i+=z)
		arr = arr.concat(i);

else
	for(let i=x; i>=y; i+=z)
		arr = arr.concat(i);

return arr;
}

console.log(arrDisplay(5, 2, -1));