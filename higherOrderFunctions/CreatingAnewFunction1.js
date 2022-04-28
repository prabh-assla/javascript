function result(p){

	return (...q) => {
		return r => {
			return (...s) => {
				console.log(p(...q) + r(...s));
			}
		}
	}
}

result(Math.max)(1, 2, 0, -9, -1)(Math.min)(-1, 0, -9, 2);