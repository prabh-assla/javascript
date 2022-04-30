// function OwnLoop(value){
// 	return while(testfn(value) == true){
// 		return bodyfn(value);
// 		return value = updatefn(value);
// 	}
// }

// OwnLoop(value)(testfn)(bodyfn)(updatefn);

OwnLoop(value) = {

	return testfn = {
		if(testfn(value) == false)
			return false;

		else
			return bodyfn = value => {
			 	bodyfn(value);

			 	return updatefn = value => {
			 		return updatefn(value);
			}
		};
	}
}

let a = 3;

for(let i=0; i<=3; ++i){
	a = OwnLoop(a)(j => j<2)(j => 5*j)(j => j+2);
}