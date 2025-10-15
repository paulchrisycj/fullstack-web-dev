for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("======================")

// 1. Print numbers 1 to 10 using a for loop
// 2. Print only even numbers between 1 and 20
// 3. Use a while loop to count down from 5 to 1
// 4. Use a do...while loop to print "Hello!" 3 times

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("======================")
let k = 5;

while(k >= 1){
    console.log(k)
    k -= 1;
}

let h = 1

do{
    console.log("Hello!")
    h++;
}while(h <= 3)