const removeFromArray = function(array, ...theArgs) {
  for (const arg of theArgs) {
    if (array.includes(arg)) {
    array =  array.filter(n => n !== arg)
    }
  }
  console.log(array);
  return array;
}

let arr = [1,2,3,4,5,6]

console.log(removeFromArray(arr, 5, 4, 3, 2, 1, 6))
// Do not edit below this line
module.exports = removeFromArray;
