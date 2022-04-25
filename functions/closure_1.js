function callToFunction() {

  let name = 'Mozilla';

  function display___name() {
    alert(name);
  }

  return display___name();
}

let output = callToFunction();
output();