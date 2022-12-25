"use strict";
exports.__esModule = true;
var num = Math.round(Math.random() * 10);
console.log(num);
if (num >= 5) {
    console.log("四捨五入すると10");
}
else {
    console.log("四捨五入すると0");
}
var year = Math.round(Math.random() * 70 + 1950);
if (year % 4 == 0) {
    console.log("".concat(year, "\u5E74\u306F\u3046\u308B\u3046\u5E74\u3067\u3059\u3002"));
}
else {
    console.log("".concat(year, "\u5E74\u306F\u3046\u308B\u3046\u5E74\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
}
var x = Math.round(Math.random() * 10);
var y = Math.round(Math.random() * 10);
if (x == y) {
    console.log("同じ！");
}
else {
    console.log("違う！");
}
year = Math.round(Math.random() * 120 + 1901);
if (year > 2018) {
    console.log(year + "令和" + "".concat(year - 2018, "\u5E74\u3067\u3059"));
}
else if (year > 1988) {
    console.log(year + "平成" + "".concat(year - 1988, "\u5E74\u3067\u3059"));
}
else if (year > 1925) {
    console.log(year + "昭和" + "".concat(year - 1925, "\u5E74\u3067\u3059"));
}
else if (year > 1911) {
    console.log(year + "大正" + "".concat(year - 1911, "\u5E74\u3067\u3059"));
}
else {
    console.log(year + "明治" + "".concat(year - 1900, "\u5E74\u3067\u3059"));
}
