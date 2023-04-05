// let car ={

//     "model" : "2015",
//     "manufacturer" : "ford",
  
// }

// console.log(car.model)


// let student ={

//     "firstname" : "Shashank",
//     "lastname" :   "B",
//     "place": "Bangalore",
// }

// console.log(student.firstname)

// console.log(student['lastname'])

// student['lastname'] = "B K"

// console.log(student.lastname)
// console.log(student.course)

// student['course'] ="Cypress"

// console.log(student.course)


// console.log(student.place)

// delete student['place']

// console.log(student.place)



let users ={

    "user1" : "Shashank",
    "user2" :   "Raju",
    "user3": "Rajesh",
    "user4": "Arun",
}

// creatauser(username){


//     // cypress script 

// }

//
// cy.get(locatoer).type(users[nameofuser])
// cy.get(locator).click()


for ( let nameofuser in users){

    // console.log(nameofuser)

    // console.log(users[nameofuser])

    console.log(nameofuser + " : "+users[nameofuser])

}
