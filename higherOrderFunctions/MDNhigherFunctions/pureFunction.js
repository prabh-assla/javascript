//given the same input, always return the same output && produces no side effects

//they are completely independent of outside state, and as such, they are immune to entire classes of bugs that have to do with shared mutable state

let array = [1, 2, 3];

function addElement(array, element){
	return [...array, element];
}

console.log(addElement(array, 7));
console.log(array); //doesn't change original array!