function add(x){

  return function(y){
    return x + y;
  };

}

let add_5 = add(5);
let add_10 = add(10);

console.log( add_5(2) );  // 7
console.log( add_10(2) ); // 12