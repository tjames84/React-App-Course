// babel src/playground/es6-classes-1.js -o public/scripts/app.js --presets env,react --watch

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDiscription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// subclass

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDiscription() {
        let description = super.getDiscription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Tony James', 34, 'Colorado');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'now where');
console.log(other.getGreeting());