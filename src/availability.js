export default class Availability {
  constructor(day, time) {
    this.day = day;
    this.time = time;
  }

  static same(availabilityOne, availabilityTwo) {
    const { dayOne, timeOne } = availabilityOne;
    const { dayTwo, timeTwo } = availabilityTwo;
    return dayOne === dayTwo && timeOne === timeTwo;
  }
}
