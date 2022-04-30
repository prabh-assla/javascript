let object = { coords : [12, 22, 4, 10], length : 3 };

function normalize(){
	console.log(this.coords.map( i => i/this.length ));

}

normalize.call(object);

//arrow functions have an expanded scope for THIS including both OWN and SURROUNDING!