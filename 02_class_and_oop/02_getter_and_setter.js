/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const vui = new IdolModel('뷔', 1995);
console.log(vui);
console.log(vui.nameAndYear);

vui.setName = '강동욱';
console.log(vui);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const vui2 = new IdolModel2('뷔', 1995);
console.log(vui2);
console.log(vui2.name);

vui2.name = '강동욱';
console.log(vui2.name);
