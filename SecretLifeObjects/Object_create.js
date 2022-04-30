let j = {
	speak(line){
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
};

let i = Object.create(j);

i.type = "killer";

i.speak("SKREEEE!");