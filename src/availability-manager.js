export default class AvailabilityManager {
  constructor() {
    this.people = [];
  }

  addPeople(people) {
    this.people.concat(people);
  }

  calculateGroupAvailability() {
    const availabilities = [];
    this.people.flatMap(person => person.availabilities).forEach(availability => {
      if (this.people.every(person => person.availabilities.some(a => a.equals(availability)))) {
        availabilities.push(availability);
      }
    });
    return availabilities;
  }
}