let range = function (start, end, step) {
  let array = [];

  //Conditionals for returning empty array if one of the inputs is incorrect  

  if (start === undefined || end === undefined || step === undefined){
    return array;
  } else if (start > end) {
    return array;
  } else if (step <= 0) {
    return array;
  }

  //Building the array based on values

  let value = start;

  for (let i = 0; i <= (end - start); i += step) {
    array.push(value + i);
  }

  return array;
};

console.log(range(20, 10, 2));
console.log(range('hi', 10, -1));
console.log(range(2, 10, -1));
console.log(range(10, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
