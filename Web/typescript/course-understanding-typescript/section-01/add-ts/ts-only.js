var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
// input.value is always a string => leads to a simple concatenation instead of addition
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
