// create a class person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// this is an instance!
const person = new Person('Ezra Hampton', 28); 
console.log(this.name); // gets the name of the object.

console.log(person.name); // name
console.log(person.age); // age


// Create an employee class that inherits from the person class. 
class Employee extends Person {
    constructor(name, age, employeeId){
        super(name,age)
        this.employeeId = employeeId;
    }

    static getCompanyName() {
        return 'Web Development Solutions Incorporated';
    }
}
const employee = new Employee('ezra', 28, 90872)
console.log(employee.employeeId);

console.log(Employee.getCompanyName());


class Manager extends Employee{
    constructor(name, age employeeId){
        super(name, age, employeeId)

    }
    

}