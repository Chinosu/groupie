export default class Availability {
  constructor(day, time) {
    this.day = day;
    this.time = time;
  }

  equals(availability) {
    const { day, time } = availability
    return this.day === day && this.time === time;
  }
}
