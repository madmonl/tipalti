module.exports = class Person {
  constructor(name, address) {
    this._name = name;
    this._address = address;
  }

  get address() {
    return this._address;
  }
  
  get name() {
    return this._name;
  }

  set address(address) {
    this._address = address;
  }
  
  set name(name) {
    this._name = name;
  }
}
