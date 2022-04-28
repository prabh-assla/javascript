function LogValues(x, Logger){
	for(let i=1; i<=x; ++i){
	Logger(i);
	}
}

LogValues(18, console.log);