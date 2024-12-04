function home() {
    let i = 1;
    for (; i <= 10; i++) {

        console.log(`numbers${i}`);

    }
}
home()

function even() {
    let count = 2;
    for (; count <= 20; count = count + 2) {
        console.log(`even numbers ${count}`);
    }
}
even()

function odd() {
    let count = 1;
    for (; count <= 20; count = count + 2) {
        console.log(`odd numbers ${count}`);
    }
}
odd()

function sum() {
    let sum= 0;
    for ( num=0; num<=10; num++)
        sum=sum+num; {
console.log(` number ${sum}`);
    }
}    
sum()

function factorial(){
    let c=1;
    for(b=5;b>=1;b--){
        c=c*b;
console.log(c);

    }
}
factorial()

function tables(){
let table=1;
for(;table<=10;table++){
console.log(`${table}X6=${table}`);
}
}
tables()

function reverse(){
    let back=10;
    for(;back>=1;back--){
console.log(`${back}`);

    }

}
reverse()

function fibo(){
    let fibo=10;
    let first_value=0;
    let second_value=1;
    console.log(first_value);
    console.log(second_value);
  
    for(a=2;a<=fibo;a++){
        let next_value=first_value+second_value;
first_value=second_value;
second_value=next_value;
console.log(`${next_value}`);


    }
}
fibo()





















