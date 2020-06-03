module.exports = class Address {
  constructor(street, city) {
    this._street = street;
    this._city = city;
  }

  get street() {
    return this._street;
  }
  
  get city() {
    return this._city;
  }

  set street(street) {
    this._street = street;
  }
  
  set city(city) {
    this._city = city;
  }
}
