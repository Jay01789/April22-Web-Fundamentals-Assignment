const input = [1, -5, 2, 10, -30, 29, 50];
var reject = [];
var sum = 0;
function sumOfPositive(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      reject.push(input[i]);
    } else {
      sum = sum + input[i];
    }
  }
  console.log(sum);
}
sumOfPositive(input);
