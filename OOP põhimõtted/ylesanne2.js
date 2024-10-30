class Person {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
  }
}

class Student {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}

// Testimine
const person1 = new Person();
person1.firstname = "Alice";
person1.lastname = "Smith";
person1.age = 30;

const person2 = new Person();
person2.firstname = "Bob";
person2.lastname = "Builder";
person2.age = 25;

const person3 = new Person();
person3.firstname = "Sam";
person3.lastname = "Sam";
person3.age = 19;

const student1 = new Student("John", "Doe", 20);
console.log(student1.firstname);
console.log(student1.age);

const student2 = new Student("Mihkel", "Jordan", 32);
console.log(student2.firstname);
console.log(student2.age);

const student3 = new Student("Karin", "Eegreid", 21);
console.log(student3.firstname);
console.log(student3.age);