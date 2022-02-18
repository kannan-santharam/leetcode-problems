let employee = {
"name" : "Kannan",
 "id" : "10001",
 "designation": "Front End Developer"
}
let employee2 = {
"name" : "Ragnar",
 "id" : "10002",
 "designation": "Vikings, Axe Man"
}

function getEmployeeDetails(extraParameter){
  console.log(`Name: ${this.name}, ID: ${this.id}, Designation: ${this.designation}\n Extra: ${extraParameter}`)
}
//call method is function borrowing, can pass multiple arguments
getEmployeeDetails.call(employee,"This is extra argument - string")

//apply - pass arguments in a  array
getEmployeeDetails.apply(employee2,["This is extra argument - array"])

//bind method will retun a function and can be used to execute later
let bindMethodOfEmployee = getEmployeeDetails.bind(employee,"This is extra argument - bind -string");
bindMethodOfEmployee()
