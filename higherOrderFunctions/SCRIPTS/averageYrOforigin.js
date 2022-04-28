let scripts = [
{
	name: "a",
	ranges: [[1, 45], [78, 89], [100, 189]],
	direction: "ltr",
	year: 700,
	living: false
},
{
	name: "b",
	ranges: [[46, 77], [90, 99], [190, 10600]],
	direction: "ltr",
	year: 200,
	living: true
},
{
	name: "c",
	ranges: [[601, 809], [923, 1000], [1400, 20890]],
	direction: "rtl",
	year: -100,
	living: false
},
{
	name: "d",
	ranges: [[602, 808], [924, 999], [1001, 1399]],
	direction: "rtl",
	year: -78,
	living: true
}
]

function avgYrOforigin(array){
	return array.reduce((a,b) => a+b) / array.length;
}

console.log(Math.round(avgYrOforigin(
	scripts.filter(s => s.living).map(s => s.year))));

console.log(Math.round(avgYrOforigin(
	scripts.filter(s => !s.living).map(s => s.year))));