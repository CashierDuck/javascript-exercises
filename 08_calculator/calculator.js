const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = (arr) => arr.reduce((total, item) => total+=item, 0);

const multiply = (arr) => arr.reduce((total, item) => total*=item, 1);

const power = function(a,b){
  let total = a;
  for(let i = 1; i<b; i++){
    total*=a;
  }
  return total;
}

const factorial = function(a) {
  let total = 1;
	for(let i = a; i>0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
