// Encapsulation 

// class Student {

//     constructor() {
//         let name, marks;
//     }

//     setName(value){
//         this.name=value
//     }

//     getname() {
//         return this.name;
//     }

//     setMarks(value){
//         this.marks=value
//     }

//     getMarks() {
//         return this.marks;
//     }

// }

// let stud = new Student()

// //stud.setName("Raju")

// // stud.setMarks(90);

// console.log(stud.getname())

// console.log(stud.getMarks())




// class Student {

//     empname = "Prasad";

//     setName(value) {
//         var exp = new RegExp(/\d+/); //accept only string
//         if (exp.test(value)) {
//             console.log("Invalid Name");
//         }
//         else {
//             this.name = value;
//         }
//     }

//     getName() {
//         return this.name;
//     }

// }

// let stud = new Student()

// console.log(stud.empname)


// stud.setName("Raju");
// console.log(stud.getName());  
// stud.setName(42);        // Invalid Name
// console.log(stud.getName());   // Rahul Khanna

//inheritance


// class A{
//     a=100;
//     display(){
//         console.log(this.a)
//     }
//     messageofclassA(){

//         console.log("Parent class message")
//     }

// }


// class B extends A
// {
//     b=200;
//     show(){
//         console.log(this.b)
//     }

//     messageofClassB(){

//         console.log("Clild class message")
//     }
// }


// class C extends B {

//     messageofClassC(){

//         console.log("C class message")
//     }
// }
// let myobj = new C();

// //myobj.display() // class A
// myobj.show() // class B
// //myobj.messageofclassA() // class A
// myobj.messageofClassB() // Class B

// myobj.messageofClassC()

// Prototype 


// class employee {

//     constructor (empname, empnum, empdept){
//     this.empname = empname;
//     this.empnum = empnum;
//     this.empdept = empdept;
//     }
    

// }


// employee.prototype.Org = "DBS QA"

// employee.prototype.displaydetails= function (){

//     console.log(this.empname, this.empnum, this.empdept, this.Org)
// }

// emp1 = new employee("Raju", 418, "L&D")

// emp1.displaydetails()



// emp2 = new employee("Radha", 419, "L&D");

// emp2.displaydetails()



// emp3 = new employee("Ashok", 420, "L&D");

// emp3.displaydetails()

// Polymorphism


class A{

    display(a,b){
        console.log(a)
        console.log(b)
        console.log("result :"+ (a+b))
    }
    message(){

        console.log("Parent class message")
    }

}
class B extends A
{
    display(a,b,c){
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(a+b+c)
    } 

    message(){

        console.log("Clild class message")
    }
}

let myobj = new A();
myobj.message()

myobj.display(1, 4, 5)

// Overloadeding arguments 

//Method Overloading 

  // Method Overriding 

  
// Callback 

// Promises

//Set 

//Map

// Cypress 
