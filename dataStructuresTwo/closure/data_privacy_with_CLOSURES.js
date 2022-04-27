function box(){
	let value = 0;

	return function count(){
		++value;
		console.log(value);
	}

}

box(); //can't access count() directly!

let a = box();
a(); //now we can access count() function
