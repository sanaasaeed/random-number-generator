// // Normal Fucntions
// function sum(num1, num2){
//    return num1 + num2;  
// }
// // Function Expressions
// let variable = function(){
//    console.log("Hey World: Why everyone say hello");
// };
// variable();
// console.log(variable);
//       // Parenthesis give you result of the function --
//       // while without parenthesis give you function

// let sumExp = function(num1, num2){
//    return num1 + num2;
// };      

// console.log(sumExp(11,3));
// Callback fucntions

// function askQuestion(question, yes, no){
//    if(confirm(question)){
//       yes();
//    }else{
//       no();
//    }
// }


// function showOk(){
//    alert('You agreed');
// }

// function showCancl(){
//    alert('you disagreed canceled');
// }

// askQuestion('Do You Agree? ' , showOk, showCancl);

// // Shorter way

// askQuestion('DO you agreE', function(){alert('You agreed')}, function(){alert('You disagreed')});

// sayHi('Saaana');

// let sayHi = function(name){
//    alert(`Your name is: ${name}`);
// }

// let age = prompt('What is your age ? ', 18);


// let welcome = (age > 18)? function(){alert('Geetings')} : function(){alert('Hello')};

// welcome();

// Arrow Functions

// let sumation = (num1, num2) => num1 + num2;
// console.log(sumation(1,5));

// let double = n => n *2;

// console.log(double(5));

// let printName = name => console.log(name);

// printName("Sama");

// let ask = (question, yes, no) => {
//    (confirm(question))? yes() : no();
// }

// ask('Do you agree', ()=>alert('You agreed'), ()=>alert('You Disagreed'));

// let student = {
//    firstName: 'Sana',
//    lastName: 'Saeed',
//    age: 21,
//    semester: 4,
//    programme: 'BSSE',
//    regNo: 123,
//    rollNo: 'FA17-BSE-123',
//    addCourse: function(courseId){
//       console.log('Course ' + courseId + ' added');
//    },
//    deleteCourse: function(courseId){
//       console.log(courseId + ' Deleted');
//    }
// };

// console.log(student.firstName + ' ' + student.lastName);
// student.deleteCourse('CSC112');

// const str = 'Sana Saeed';
// console.log(str.toUpperCase()); 

// const title = 'a man of words and diginity and honor';
// console.log(title.toUpperCase());

// let num = 255;
// console.log(123..toString(36));

// let numm = 2814;
// let divide = 22;

// let result = numm/divide;
// console.log(result);
// console.log(Math.trunc(result));

// console.log(1e500);

// console.log(0.1 + 0.2);
// console.log(0.1.toFixed(2));

// console.log(13/10);

// console.log(((0.28 * 100 + 0.14 * 100) / 100).toFixed(2));

// console.log(9999999999999999);

// // NaN not a numebr

// console.log(isFinite(Infinity));

// console.log(Math.trunc(Math.random()*500));



// -1.1 -- Math.floor => -2 
// -1.1 -- Math.ceil => -1
// -1.1 -- round =>

function generate(){
  const input = document.getElementById('input');
  let random = Math.trunc(Math.random()*100);
  input.setAttribute('value', random);
}