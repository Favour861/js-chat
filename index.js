var name = "";
var count = 0;


// Conditional operators (>, <, >=, <=, ==, ===, !=)
// Logical operators (&&, ||)

var name = "";

if(name == true){
    alert("YEAH!")
}else{
    alert("NAY!")
}

//SWITCH
//TENARY OPERATOR

// if(number != 15){
//     alert("not 15")
// }else{
//     alert("it is 15")
// }
// if(number % 3 == 0 && number % 5 == 0){
//     alert("fizzbuzz")
// }else if(number % 3 == 0){
//     alert("fizz")
// }else if(number % 5 == 0){
//     alert("buzz")
// }else{
//     alert(number)
// }

// if(number % 3 == 0){
//     alert("fizz");
// }else if(number % 5 == 0){
//     alert("buzz");
// }else if(number % 3 == 0 && number % 5 == 0){
//     alert("fizz-buzz")
// }


// if(age >= 18){
//     alert("You are an adult")
// }else if(age > 11 && age < 18){
//     alert("You are a teenager")
// }else{
//     alert("You are a kid")
// }

// if(condition == true){
//     statements
// }

// if(condition){ //true
//     statements
// }else{ //false
//     statements
// }

// if(condition){ //true
//     statements
// }else if(condition){ //another condition //true
//     statements
// }else if(condition){ //another condition //true
//     statements
// }else{ //false
//     statements
// }

// function showText(number){
//     document.getElementById('screen').innerHTML += number
// }

// function calculate(){
//     let content = document.getElementById('screen').innerText;
//     let answer = eval(content);
//     document.getElementById('screen').innerText = answer;
// }

// function add(a, b){
//     let sum = a + b
//     alert(sum)
// }

// function subtract(a, b=5){
//     let difference = a - b;
//     alert(difference)
// }


// add(5,5)
// subtract(10)




// function collectName(){
//     name = prompt("What is your name?")
//     document.getElementById('username').innerHTML = `Welcome, ${name}`;
// }

// collectName();

// function sendMessage(){
//     count += 1;
//     let message = document.getElementById('msgInp').value;
//     document.getElementById('chatArea').innerHTML += `<div style="padding: 10px; background-color: lightgreen; font-size: 10pt; max-width: 30%">${message}</div> <br>`;
//     document.getElementById('msgInp').value = "";
//     document.getElementById('msgInp').focus();

//     document.getElementById('msgCount').innerHTML = count;
// }