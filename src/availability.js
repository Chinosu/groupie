export default class Availability {
  constructor(day, time) {
    this.day = day;
    this.time = time;
  }

  equals(availability) {
    const { thisDay, thisTime } = this;
    const { day, time } = availability;
    return thisDay === day && thisTime === time;
  }
}
