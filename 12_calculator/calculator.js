const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((accumulator,currValue)=>{
    return accumulator+currValue
  },0)
};

const multiply = function(arr) {
 return arr.reduce((accumulator,currValue)=>{
    return accumulator*currValue
  },1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  let ans=1;
	for(let i=a;i>=1;i--){
    ans*=i;
  }
  return ans
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
