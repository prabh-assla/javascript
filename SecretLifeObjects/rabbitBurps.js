function speak(){
	console.log(`the '${this.type}' rabbit said : '${this.speak}'`);
}

let whiterabbit = {type : "white", speak : "burps!"};

speak.call(whiterabbit);