let countchar = (s, c) => {

	let sum = 0;

	for(let i=0; i<=s.length-1; ++i){
		if(s[i] == c)
			++sum;
	}

	return sum;
}

console.log(countchar("califocarniacatioriumcism", "o"));