"use strict";
class Key {
    constructor() {
        this.getSignature = () => {
            return this.signature;
        };
        this.signature = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    }
}
class Person {
    constructor() {
        this.key = new Key();
    }
    get personKey() {
        return this.key;
    }
}
class House {
    constructor(door, key) {
        this.tenants = [];
        this.comeIn = (person) => {
            if (this.door === "closed") {
                console.log("Open the door!");
                return;
            }
            this.tenants.push(person);
        };
        this.door = door;
        this.key = key;
    }
}
class MyHouse extends House {
    constructor() {
        super("closed", new Key());
    }
    openDoor(key) {
        if (this.key.getSignature() !== key) {
            console.log("Try another key");
            return;
        }
        console.log("door opened with key" + key);
        this.door = "opened";
    }
}
const myNewHouse = new MyHouse();
const Jacob = new Person();
myNewHouse.openDoor(Jacob.personKey.getSignature());
myNewHouse.comeIn(Jacob);
console.log(myNewHouse.tenants);
//# sourceMappingURL=part-04.js.map