class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  }

  public getSignature = (): number => {
    return this.signature;
  };
}

////
class Person {
  private key: Key;

  constructor() {
    this.key = new Key();
  }

  get personKey(): Key {
    return this.key;
  }
}
////
abstract class House {
  public door: "closed" | "opened";
  public key: Key;
  public tenants: Person[] = [];

  constructor(door: "closed" | "opened", key: Key) {
    this.door = door;
    this.key = key;
  }

  public comeIn = (person: Person): void => {
    if (this.door === "closed") {
      console.log("Open the door!");
      return;
    }
    this.tenants.push(person);
  };

  public abstract openDoor(key: number): void;
}
////

////
class MyHouse extends House {
  constructor() {
    super("closed", new Key());
  }

  public openDoor(key: number): void {
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
