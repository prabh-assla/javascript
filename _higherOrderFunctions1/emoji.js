let symbols = "🌱🌻🎗❣️";

console.log(symbols.length);
// -> 8

console.log(symbols[0], symbols[1], symbols[2], symbols[3]);
// -> Invalid half-characters ===> � � � � 

console.log(symbols.charCodeAt(0), symbols.charCodeAt(1), symbols.charCodeAt(2), symbols.charCodeAt(3));
// -> Code of the half-characters ===> 55356 57137 55356 57147

console.log(symbols.codePointAt(0), symbols.codePointAt(1), symbols.codePointAt(2), symbols.codePointAt(3));
// -> Actual code for symbols emojis ===> 127793 57137 127803 57147

console.log(symbols);