(function(){
'use strict';


var numButtons = document.getElementsByClassName('num');
var calculation = [];
var operator = false;

// var input = "";

function pushNumber(event) {
  var value = event.target.textContent;
  // alert(value);
  calculation.push(value);
  var newArray = calculation.join('');
  var splitArray = newArray.split('+');
  console.log('newArray', newArray);
  console.log('Split Array', splitArray);
  console.log(splitArray[0] + splitArray[1]);
  // console.log('calculation', calculation);
}

for (var i = 0; i < numButtons.length; i++) {
  var input = numButtons[i];
  input.addEventListener('click', pushNumber);
}

var opButtons = document.getElementsByClassName('operator');

function pushOperator(event) {
  var value = event.target.textContent;
  // alert(value);
  calculation.push(value);
  console.log(calculation);
}

for (var i = 0; i < opButtons.length; i++) {
  var input = opButtons[i];
  input.addEventListener('click', pushOperator);
}


// var opButtons = document.getElementsByClassName('operator');
//   for (var i = 0; i < opButtons.length; i++) {
//     var oper = opButtons[i]
//     console.log("OPPPERRATIONNS " + oper.textContent);
//     oper.addEventListener('click', function pushOperator(){
//       console.log(oper.textContent);
//       alert('operator ' + oper.textContent);
//     });
//   }

// var specButtons = document.getElementsByClassName('special');
//   for (var i = 0; i < specButtons.length; i++) {
//     specButtons[i].addEventListener('click', function pushSpecial(){
//       alert('special ')
//     });
//   }

function calculate(){

  // alert('=')
  // take the calculation array and split it into 3 parts


  // if statement based on the operator
}

document.getElementById('equal').addEventListener('click', calculate);


// calculation.push(2);
// calculation.push(3);
// calculation.push(2);
// calculation.unshift(9);

console.log('my array', calculation);



















}());
