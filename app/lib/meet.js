import IdProvider from "./id-provider";

export default class Meet {
  // placeholder
  static get baseUrl() {
    return 'http://localhost:3000'
  }

  static get dailySlots() {
    return 32;
  }
  
  static get timeOfFirstSlot() {
    return 700;
  }

  static get slotDuration() {
    return 30;
  }

  constructor(start, days, description) {
    this.start = start;
    this.days = days;
    this.description = description;
    this.id = IdProvider.nextId();

    this.slots = Array.from({ length: this.days }, (_, _) =>
      Array.from({ length: Meet.dailySlots }, (_, _) => new Set()));
  }

  getLink() {
    return `http://localhost:3000/meet/${this.id}`;
  }
}