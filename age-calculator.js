const ageCalculator = function(name, yearOfBirth, currentYear) {
  let result = '';
  return result += name + ' is ' + (currentYear - yearOfBirth) + 'years old.';
}

console.log(ageCalculator('Juan', 1994, 2019));
