function rev(...arr){
let ARR = [], j = arr.length;


	for(let i of arr){

		if(j==0)
			break;

		ARR[--j] = i;
	}

return ARR;
}

console.log(rev(1, 3, 5, -9, 8));