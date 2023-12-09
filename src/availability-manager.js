export default class AvailabilityManager {
  constructor(people) {
    this.people = people ?? [];
    this.people.flat();
  }

  addPeople(people) {
    this.people.concat(people);
  }

  calculateGroupAvailability() {
    const availabilities = [];
    this.people.flatMap(person => person.availabilities).forEach(availability => {
      if (this.people.some(person => person.availabilities.every(a => !a.equals(availability)))) {
        return;
      }
      if (availabilities.some(a => a.equals(availability))) {
        return;
      }
      availabilities.push(availability);
    });
    return availabilities;
  }
}