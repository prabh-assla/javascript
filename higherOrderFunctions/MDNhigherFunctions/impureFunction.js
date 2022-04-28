let array = [1, 2, 3];

function addElement(array, element){
	array.push(element);
}

addElement(array, 4);

console.log(array); // original array is changed i.e., data mutation has happened