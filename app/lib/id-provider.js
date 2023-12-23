export default class IdProvider {
  static #ids = new Set();

  static #randomNumber = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  static nextId() {
    let id = IdProvider.#randomNumber();
    while (IdProvider.#ids.has(id)) {
      id = IdProvider.#randomNumber();
    }

    IdProvider.#ids.add(id);
    return id;
  }
}