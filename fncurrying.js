/*Write a function to handle the below input

add(2)(3)...(n)()
*/


function addNumbers(a) {
  if (!a) return a;
  return function (b) {
    if (!b) return a;
    return addNumbers(a + b);
  };
}
console.log(addNumbers(2)(1)(3)(10)());
