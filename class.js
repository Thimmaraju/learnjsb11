// class classname{

//     //variables 

//     //Methods
// }


// class Student{
    

//     a=10
//     stuname = "Raju"

//     printmessage(){

//         console.log("This is class example - costructor")
//     }

//     constructor(name, num, place){

//         this.Studentname = name
//         this.Rollnum = num
//         this.StudentPlace = place
//     }

//     displaydetails(){

//         console.log(this.Studentname,this.Rollnum,this.StudentPlace )
    
//     }
// }


// let stu1 = new Student("Rajesh", 12, "Chennai")



// console.log(stu1.a)

// //stu1.details("Rajesh", 12, "Chennai")

// stu1.displaydetails()


// let stu2 = new Student("Arun", 12, "Chennai")

// stu2.displaydetails()

// let stu3 = new Student("Manjunath", 12, "Chennai")
// stu3.displaydetails()

// let stu4 = new Student("Manjuhree", 12, "Chennai")
// stu3.displaydetails()
// //constuctor - Method

// automatically


class Employee{

    static a=10
    b=20

    static m1(){

        console.log("This is Static Method")
    }

    m2(){

        console.log("This is non Static Method")
    }
}

// let emp1 = new Employee()


// emp1.m1()

console.log(Employee.a)

Employee.m1()

//oops
