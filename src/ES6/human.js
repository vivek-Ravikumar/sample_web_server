/* class - way to model real world objects
         -  property and methods
          
*/

class Human {
  static breathe() {
    console.log("breathe");
  }
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._spokenwords = [];
  }

  get name() {
    return this._firstName + " " + this._lastName;
  }

  set name(humanName) {
    const [firstName = "", lastName = ""] = humanName.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  }

  speak(word) {
    this._spokenwords.push(word);
    console.log(word);
  }
}

const dany = new Human("Alfred", "Dany");

console.log(dany.name);

dany.name = "new name";

Human.breathe();
