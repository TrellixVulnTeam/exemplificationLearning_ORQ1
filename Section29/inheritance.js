class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return this.name + " is eating.";
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, age);
        this.livesLeft = 9;
    }
    meow() {
        return "meow.";
    }
}

class Dog extends Pet {
    constructor(name, age) {
        super(name, age);
    }
    bark() {
        return "bark!";
    }
}