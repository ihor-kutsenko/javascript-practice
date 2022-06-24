// // *Example #1
//==================================================================================================================
// Виконай рефакторинг класу Car.Зроби властивості model і price приватними, а також #brand.
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені
// методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.
class Car {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
