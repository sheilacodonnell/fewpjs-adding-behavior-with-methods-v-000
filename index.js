class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  speak(name) {
    return `${this.name} says meow!`
  }
}
 
class Dog {
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  speak(name) {
    return `${this.name} says woof!`
  }
 
}
 
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  speak(name) {
    return `It's me ${this.name}, the parrot!`
  }
  
}