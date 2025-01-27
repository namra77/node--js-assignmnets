class Animal {
    // Private property
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Public method to get the name
    getName() {
        return this.#name;
    }

    // Public method to get the age
    getAge() {
        return this.#age;
    }

    // Method to make a sound
    makeSound() {
        console.log(`${this.#name} makes a sound.`);
    }
}

// Inherit from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call the parent constructor
        this.breed = breed; // Additional property for Dog
    }

    // Override the makeSound method
    makeSound() {
        console.log(`${this.getName()} barks.`);
    }
}

// Inherit from Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age); // Call the parent constructor
        this.color = color; // Additional property for Cat
    }

    // Override the makeSound method
    makeSound() {
        console.log(`${this.getName()} meows.`);
    }
}

// Example usage
const dog = new Dog('Buddy', 3, 'Golden Retriever');
dog.makeSound(); // Output: Buddy barks.

const cat = new Cat('Whiskers', 2, 'Tabby');
cat.makeSound(); // Output: Whiskers meows.