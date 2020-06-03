module.exports = class Name {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  
  get lastName() {
    return this._lastName;
  }

  set firstName(firstname) {
    this._firstName = firstName;
  }
  
  set lastName(lastName) {
    this._lastName = lastName;
  }
}
