"use strict";
exports.__esModule = true;
var i = 1;
while (i <= 10) {
    var ans = Math.pow(i, 2);
    console.log("while:".concat(ans));
    i++;
}
for (var i_1 = 1; i_1 <= 10; i_1++) {
    var ans = Math.pow(i_1, 2);
    console.log("for:".concat(ans));
}
var sum = 0;
for (var i_2 = 1; i_2 <= 10; i_2++) {
    sum += Math.pow(i_2, 2);
}
console.log("sum:".concat(sum));
var min = 100;
for (var i_3 = 1; i_3 <= 10; i_3++) {
    var num = Math.round(Math.random() * 100);
    console.log("\u6570:".concat(num));
    if (num < min) {
        min = num;
    }
}
console.log("\u6700\u5C0F\u5024:".concat(min));
