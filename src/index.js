import AvailabilityManager from "./availability-manager.js";
import Availability from "./availability.js";
import Person from "./person.js";

console.log('hello, JavaScript.');

const people = [];
people.push(new Person('Bob', new Availability(1, 2), new Availability(2, 3)));
people.push(new Person('Chris', new Availability(1, 2), new Availability(1, 3)));
const manager = new AvailabilityManager(people);
console.log(manager.calculateGroupAvailability());
