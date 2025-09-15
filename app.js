// printing by function
function hello(){
    console.log("My name is zumer");
    console.log("I am a girl");
}
hello();


// loop by function
function hello2(){
    
    for(let i=1;i<=5;i++){
    console.log(i);
    }
}
hello2();


// loop by function
function hello3(){
    let age=14;
    
   if(age<18) console.log("not adult");
   else console.log("adult");
}
hello3();


// practice qs
function poem()
{
    console.log("Twinke Twinkle Little star. HOW i WONDER what you ARE");
}
poem();


// roll dice
function roller(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
roller();
roller();
roller();


// arguments
function info(name,age){
    console.log(`${name}'s age is ${age}`);
}
info("zumer",23);
info("alishba",24);
info("wahab",20);
info("mama",44);


// sum
function sum(a,b){
    console.log(a+b);
}
sum(40,40);


// avg
function avg(a,b){
    console.log((a+b)/2);
}
avg(40,40);



// table
function table(num){
    for(let i=0;i<=num*10;i=i+num){
    console.log(i);
    }
}
table(2);



// return 
// sum
function sum(a,b){
    return a+b;
    let l=a+b; // return ka bad nothing adds
}
let ans=sum(sum(40,40),40);  //return hota
console.log(ans);



// sum 1 to n
function sm(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
        
    }
    return sum;
}

let answer=sm(4);
console.log(answer);


// concatenation of strings
let str4=["My ","name ","is ","zumer."];
function string(str4){
    
    let sum="";
    for(let i=0;i<str4.length;i++){
        sum+=str4[i];
        
    }
    return sum;
}


console.log(string(str4));





























