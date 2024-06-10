function findLargest(a, b, c) {
  //your code here
	let max = num1>num2 ? (num1>num3 ? num1 : num3) : (num2>num3 ? num2 : num3);
	return max;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
