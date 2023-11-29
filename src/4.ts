class Key {
    private signature: string = Math.random().toString();
    getSignature(): string {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    public door: boolean = false;
    public tenants: Person[] = [];
    constructor(public key: Key) {
    }
    public comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }

    }

    public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    openDoor(key: Key): boolean {
        if (key.getSignature() === this.key.getSignature()) {
            return this.door = true;
        } else {
            return this.door = false;
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };