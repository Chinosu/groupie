export default class Person
{
  constructor(name, availabilities) {
    this.name = name;
    this.availabilities = availabilities;
  }

  updateAvailabilities(newAvailabilities) {
    this.availabilities = newAvailabilities;
  }
}
