

class Person {

    constructor(name = "Hello", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetings(){
        return `Hi I am ${this.name}!.`;
    }

    getDescription() {

    return `Hi This is ${this.name} and are ${this.age} years old.`
    }

}

class Student extends Person{

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let desc = super.getDescription();

        if (this.hasMajor()) {
            desc += ` Their major is ${this.major}.`
        }
        return desc;
    }
}


class Traveller extends Person {

    constructor (name, location) {
        super(name, undefined);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getGreetings() {
        let greet = super.getGreetings();

        if(this.hasLocation()){
            greet += ` I am visiting from ${this.location}.`;
        }
        return greet;
    }
}




const me = new Traveller('Shekhar', 'New York');

console.log(me.getGreetings());


// const me = new Student('Shekhar Bhardwaj', 33, 'IT');

// console.log(me.getDescription());


// const other = new Student();

// console.log(other.getDescription());