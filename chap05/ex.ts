export{}

let i = 1;
while(i <= 10) {
    const ans = i ** 2;
    console.log(`while:${ans}`);
    i++
}

for( let i = 1; i <= 10; i++) {
    const ans = i ** 2;
    console.log(`for:${ans}`);
}

let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i ** 2;
}
console.log(`sum:${sum}`);

let min = 100;
for(let i = 1; i <= 10; i++) {
    const num = Math.round(Math.random() * 100 );
    console.log(`数:${num}`);
    if( num < min) {
        min = num;
    }
}
console.log(`最小値:${min}`);

