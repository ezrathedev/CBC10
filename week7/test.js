class Person{
    constructor(name, age, gender){
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  const person = new Person('Ezra', 28, 'male')
  
  console.log(person.name, person.age, person.gender);

  class Person extends Newbie {
      constructor(power){
          super(name,age,gender)
          this.power = power;
      }
  }
  const newbie = new Newbie('tara', 16, 'female', 'magic')
  console.log(`${newbie.name}`);