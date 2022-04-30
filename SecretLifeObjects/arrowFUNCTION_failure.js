let object = { coords : [12, 22, 4, 10], length : 3 };

function normalize(){
	console.log(this.coords.map( function(i) { i/this.length }));
}

normalize.call(object);

//functions have a scope for THIS including only and not of surrounding!