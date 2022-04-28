function noisy(f) {
	return (...args) => {
		console.log("calling with", args);

		let result = f(...args);

		console.log("called with", args, ", returned", result);

	return result;
	};
}

noisy(Math.min)(3, 2, 1);

/* 1st call :

function noisy(Math.min) {
	return (...args) => {
		console.log("calling with", args);

		let result = Math.min(...args);

		console.log("called with", args, ", returned", result);

	return result;
};

//	return (...args);

}*/

/* 2nd call :

function noisy(Math.min) {
	return ({3, 2, 1}) => {
		console.log("calling with", {3, 2, 1});

		let result = Math.min({3, 2, 1}); // result = 1

		console.log("called with", {3, 2, 1}, ", returned", result);

	return result;
};

//	return result = 1;

}*/
