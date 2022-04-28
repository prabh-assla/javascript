let SCRIPTS = [{
	name: "Coptic",
	ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
	direction: "ltr",
	year: -200,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet_coptic"
},{
	name: "Japenese",
	ranges: [[914, 1008], [1392, 1508], [11513, 11520]],
	direction: "ltr",
	year: -800,
	living: true,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet_japanese"
},{
	name: "Briuty",
	ranges: [[9974, 11008], [12, 118], [11513, 11520]],
	direction: "rtl",
	year: -12000,
	living: false,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet_briuty"
},{
	name: "trithy",
	ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
	direction: "rtl",
	year: 200,
	living: true,
	link: "https://en.wikipedia.org/wiki/Coptic_alphabet_trithy"
}]

function map(array, transform){
	let MAP = [];

	for(let i of array){
		MAP.push(transform(i));
	}

	return MAP;
}

let rtlscripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlscripts, s => s.link));