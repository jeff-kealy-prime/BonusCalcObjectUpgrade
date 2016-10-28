var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];



function Person(array) {
  this.employeeName = array[0];
  this.employeeId = array[1];
  this.salary = array[2];
  this.rating = array[3];
}
var atticusObject = new Person(atticus);
//console.log(atticusObject.employeeName);
var jemObject = new Person(jem);
var booObject = new Person(boo);
var scoutObject = new Person(scout);
var robertObject = new Person(robert);
var mayellaObject = new Person(mayella);

var employeeList = [atticusObject, jemObject, booObject, scoutObject, robertObject, mayellaObject];

for(var i = 0; i < employeeList.length; i++){
  console.log(employeeList[i]);
}

// ! ! !
// Three Bugs



//var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');


//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < employeeList.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0]; // employee name

  var employeeNumber = parseInt(array[1]);
  var baseSalary = parseInt(array[2]);
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = Math.round(100 * bonus)/100; // percentage of STI employee to receive
  newArray[2] = baseSalary * (1.0 + bonus); // adjusted annual compensation
  newArray[3] = Math.round(baseSalary * bonus); //total bonus rounded to nearest dollar
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent - .01;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
