
//  condition - true 

//  {



//  }

//  {


//  }

 // if  .... else 

 // else if 

 // switch 


//  if(condition){

//     //statement 


//  }

// var age = 5


// if(age> 18){


//     console.log("Condition gave ture")
//     console.log("if block")

//     console.log("Votable Age")
// }
// else{
//     console.log("else block")

//     console.log("Not Votable Age")
// }

//console.log(60>60)

let marks=40;

if (marks > 90 && marks <= 100) {
    console.log("grade = 'A+'");
}
else if (marks > 80 && marks <= 90) {
    console.log("grade = 'A'");
}
else if (marks > 70 && marks <= 80) {
    console.log("grade = 'B'");
}
else if (marks > 60 && marks <= 70) {
    console.log("grade = 'C'");
}
else if (marks > 50 && marks <= 60) {
    console.log("grade = 'D'");
}
else {
    console.log("grade = 'fail'");
}

//Switch 


let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";

}

console.log(day);


///second ex2

let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}

console.log(`The value is ${a}`);

// for ,  while, do while 


// es6
// ===
// for in
// for of 


// working objects