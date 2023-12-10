export default class AvailabilityManager {
  static get numTimeslotsPerDay() {
    return 32;
  }
  static get firstTimeslotTime() {
    return 700;
  }
  static get timeslotDuration() {
    return 30;
  }
  static timeslot(day, time) {
    return { day, time };
  }

  constructor(startDay, numDays) {
    this.startDay = startDay;
    this.numDays = numDays;

    this.timeslots = Array.from({ length: this.numDays }, () => {
      return Array.from({ length: AvailabilityManager.numTimeslotsPerDay }, (v, k) => {
        return new Set();
      });
    });
  }

  updatePerson(name, newTimeslots) {
    this.timeslots.forEach((day, day_i) => day.forEach((_, time_i) => {
      if (newTimeslots?.some(newTimeslot => newTimeslot.day === day_i && newTimeslot.time === time_i)) {
        this.timeslots[day_i][time_i].add(name);
        console.log('y');
      } else {
        this.timeslots[day_i][time_i].delete(name);
      }
    }));
  }

  print() {
    this.timeslots.forEach((day, day_i) => {
      console.log(`Day ${day_i}:`);
      day.forEach((time, time_i) => {
        console.log(`\tTime ${time_i * AvailabilityManager.timeslotDuration + AvailabilityManager.firstTimeslotTime}: ${Array.from(time)}`);
      });
    });
  }
}
