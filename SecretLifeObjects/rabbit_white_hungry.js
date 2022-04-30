whiterabbit.speak = function speak(line){
	console.log(`the '${this.type}' rabbit said '${line}'`);
}

let whiterabbit = {type : "white"};
let blackrabbit = {type : "black"};

whiterabbit.speak("I hate my life!");