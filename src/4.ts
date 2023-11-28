class Key {
    private signature: string;
    constructor() {
        this.signature = Math.random().toString();
    }
    getSignature(): string {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { 
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    constructor(public key: Key) {
        this.key = key;
    }
    public door: boolean;
    public tenants: Key[] = [];
    public comeIn(person: Person) {
        this.tenants.push(person.getKey());
    }

    public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
    constructor(public key: Key) {
        super(key)
    }
    openDoor(key: Key): boolean {
        if (key.getSignature() === this.key.getSignature()) {
            return true;
        } else {
            return false;
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };