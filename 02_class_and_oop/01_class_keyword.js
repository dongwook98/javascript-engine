/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// constructor - 생성자

const vui = new IdolModel('뷔', 1995);
console.log(vui);
const jungKook = new IdolModel('정국', 1997);
console.log(jungKook);
const RM = new IdolModel('RM', 1994);
console.log(RM);
const jin = new IdolModel('진', 1992);
console.log(jin);
const suga = new IdolModel('슈가', 1993);
console.log(suga);
const jHope = new IdolModel('제이홉', 1994);
console.log(jHope);
const jimin = new IdolModel('지민', 1995);
console.log(jimin);

console.log(vui.name);
console.log(vui.year);

console.log(vui.sayName());
console.log(jungKook.sayName());

console.log(typeof IdolModel);
console.log(typeof vui);
