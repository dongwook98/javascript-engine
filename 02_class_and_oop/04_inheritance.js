/**
 * Inheritance
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const vui = new MaleIdolModel('뷔', 1995);
console.log(vui);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(vui.sing());
console.log(vui.year);

const dongwook = new IdolModel('동욱', 1998);
console.log(dongwook);

console.log(dongwook.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('----------------');

console.log(vui instanceof IdolModel);
console.log(vui instanceof FemaleIdolModel);
console.log(vui instanceof MaleIdolModel);

console.log('-------------------');

console.log(dongwook instanceof IdolModel);
console.log(dongwook instanceof FemaleIdolModel);
console.log(dongwook instanceof MaleIdolModel);
