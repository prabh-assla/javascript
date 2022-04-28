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

function charCount(ithScript){
	let i = ithScript.ranges;

	return i.reduce((count, [from, to]) => { return count + (to-from); }, 0);
}

console.log(scripts.reduce((a, b) => { return charCount(a) < charCount(b) ? b : a; }));