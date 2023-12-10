import AvailabilityManager from "./availability-manager.js";

console.log('hello, JavaScript.');

const manager = new AvailabilityManager(1, 3);
manager.updatePerson('joe', [AvailabilityManager.timeslot(1, 2)]);
manager.updatePerson('paul', [AvailabilityManager.timeslot(1, 2), AvailabilityManager.timeslot(1, 3)]);
manager.updatePerson('bob');
manager.updatePerson('chris', [AvailabilityManager.timeslot(1, 1), AvailabilityManager.timeslot(1, 2), AvailabilityManager.timeslot(1, 3), AvailabilityManager.timeslot(1, 4)]);
manager.print();
