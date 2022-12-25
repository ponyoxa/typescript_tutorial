export{}

let num = Math.round(Math.random() * 10);
console.log(num);
if(num >= 5) {
    console.log("四捨五入すると10");
} else {
    console.log("四捨五入すると0");
}

let year = Math.round(Math.random() * 70 + 1950);
if(year % 4 == 0){
    console.log(`${year}年はうるう年です。`);
} else {
    console.log(`${year}年はうるう年ではありません。`);
}

let x = Math.round(Math.random() * 10);
let y = Math.round(Math.random() * 10);
if( x == y ){
    console.log("同じ！");
} else {
    console.log("違う！");
}

year = Math.round(Math.random() * 120 + 1901);
if( year > 2018) {
    console.log(year + "令和" + `${year - 2018}年です`);
} else if ( year > 1988) {
    console.log(year + "平成" + `${year - 1988}年です`);
} else if ( year > 1925 ) {
    console.log(year + "昭和" + `${year - 1925}年です`);
} else if ( year > 1911 ) {
    console.log(year + "大正" + `${year - 1911}年です`);
} else {
    console.log(year + "明治" + `${year - 1900}年です`);
}