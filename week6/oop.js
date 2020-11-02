// create a class person
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
const getName = new Person('Ezra Hampton', 28);
console.log(getName.name); // gets the name of the object.
console.log(getName); // gives me name and age

//! Sample Solution Below

// Create a person class that takes a name & age into the constructor. The person class should have a getName method that returns the instantiated objects name
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}

// Create an employee class that inherits from the person class. The constructor should take in a name, age, and employeeID (number). This class should have two methods. The first method should be a static method called getCompanyName it should return 'Web Development Solutions Incorporated' The second method should be named getEmployeeID and should return the employeeID of the instantiated object, this is NOT a static method.
class Employee extends Person {
	constructor(name, age, employeeID) {
		super(name, age);
		this.employeeID = employeeID;
	}

	static getCompanyName() {
		return 'Web Development Solutions Incorporated';
	}

	getEmployeeID() {
		return this.employeeID;
	}
}

// Create a Manager class that inherits from the employee class. The constructor should accept a name, age, employeeID (number), and employees (array). This class should have two methods newEmployee & getEmployees. the newEmployee method is NOT static and should accept and employeeID as a parameter the body of the function should push the new employeeID on to the instantiated objects employees array. HINT: How do we specify "this" employees array? The second method is NOT static and should return the employees array of the instantiated object.
class Manager extends Employee {
	constructor(name, age, employeeID, employees) {
		super(name, age, employeeID);
		this.employees = employees;
	}

	newEmployee(employeeID) {
		this.employees.push(employeeID);
	}

	getEmployees() {
		return this.employees;
	}
}

// Create a Clerk class that inherits from the Employee class. The constructor should accept a name, age, employeeID (number), supervisorID (number). This class should have one method getSupervisor it should return the instantiated objects supervisor's ID
class Clerk extends Employee {
	constructor(name, age, employeeID, supervisorID) {
		super(name, age, employeeID);
		this.supervisorID = supervisorID;
	}

	getSupervisor() {
		return this.supervisorID;
	}
}

// create a variable named currentID, we'll want to modify this so make sure it isn't a constant set the value to 1.
let currentID = 1;

// instnatiate an object from the Manager class stored in a variable named "boss" you can pass in any name or age you'd like, the employeeID should be passed in as currentID++, and the employees should be passed as an empty array.
const boss = new Manager('Steve', 45, currentID++, []);

// Instantiate an object from the Clerk class store it in a variable named clerk1, again give it any name and age you'd like, the employeeID should be currentID++, for the supervisorID call the getEmployeeID on the boss variable. This works b/c we're inheriting the method from the employee class.
const clerk1 = new Clerk('Bill', 25, currentID++, boss.getEmployeeID());

// Rinse & repeat the last step. Instiate an object from the Clerk class store it in a variable named clerk2, give it any name and age you'd like, set the supervisorID to curentID++, and call the getEmployeeID on the boss variable for the supervisorID
const clerk2 = new Clerk('Amanda', 43, currentID++, boss.getEmployeeID());

// Our clerks have a supervisor assigned, so lets set them as employees of boss. We can do this with the newEmployee method. We're going to pass in an object as the parameter. The object should look like this (name: (clerk1's name), employeeID: (clerk1's employeeID)) HINT: Our Person class has a getName method & our employee class has a getEmployeeID method
boss.newEmployee({
	name: clerk1.getName(),
	employeeID: clerk1.getEmployeeID()
});
// Were going to add clerk2 as an employee just as we did with clerk1 in the same format.
boss.newEmployee({
	name: clerk2.getName(),
	employeeID: clerk2.getEmployeeID()
});

// To check our work lets console.log clerk1.getSupervisor(), we should see whatever the boss variables employeeID. NOTE: clerk2.getSupervisor() should return the same thing as we assigned both to the same supervisor
console.log(clerk1.getSupervisor());

// Console.log boss.getEmployees() you should see an array containing two objects with whatever name's and age's you gave clerk1 & clerk2
console.log(boss.getEmployees());

// Bonus Project Deal
class Account {
	constructor(owner, amount) {
		this.owner = owner;
		this.amount = amount;
		this.dateCreated = new Date();
	}

	withdrawl(amount) {
		this.amount -= this.amount - amount;
	}

	deposit(amount) {
		this.amount += this.amount + amount;
	}

	transfer(account, amount) {
		this.amount -= amount;
		account.amount += amount;
	}
}

class CheckingAccount extends Account {
	constructor(owner, amount, atmFee) {
		super(owner, amount);
		this.atmFee = atmFee;
	}

	buy(price) {
		this.amount -= price;
	}

	atm(amount) {
		this.amount -= amount + this.atmFee;
	}
}

class SavingsAccount extends Account {
	constructor(owner, amount, annualInterest) {
		super(owner, amount);
		this.annualInterest = annualInterest;
	}

	accrueAnnualInterest() {
		this.amount += this.amount * this.annualInterest;
	}
}

const myChecking = new CheckingAccount('Harcourt', 1000, 5);
const mySavings = new SavingsAccount('Harcourt', 1000, 0.2);

mySavings.accrueAnnualInterest();
console.log(mySavings.amount);
mySavings.transfer(myChecking, 200);
console.log(mySavings.amount);
