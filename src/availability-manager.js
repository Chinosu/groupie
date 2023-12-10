export default class AvailabilityManager {
  static get numTimeSlotsPerDay() {
    return 48;
  }

  constructor(startDay, numDays) {
    this.startDay = startDay;
    this.numDays = numDays;

    this.timeslots = Array.from({ length: this.numDays }, () => {
      return Array.from({ length: AvailabilityManager.numTimeSlotsPerDay }, (v, k) => {
        return new Set();
      });
    });
  }
}
