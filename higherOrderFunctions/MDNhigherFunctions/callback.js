//function that we pass as an argument to another function is called a CALLBACK FUNCTION...

function descripto1(){
	return "hello";
}

function descripto2(){
	return "world!";
}

function printIT(x, y){
	console.log(x(), y());
}

printIT(descripto1, descripto2);