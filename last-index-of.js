let lastIndexOf = function (array, value) {
  let position = 0;
  let hold = undefined;

  for (let i = 0; i < array.length; i++) {
    position = array[i];

    if (position === value) {
      hold = i;
    }
  }
  if (hold !== undefined) {
    return hold;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 5));