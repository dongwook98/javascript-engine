/**
 * Static Keyword
 */
class IdolModel {
  name;
  year;
  static groupName = 'BTS';

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return 'BTS';
  }
}

const vui = new IdolModel('뷔', 1995);
console.log(vui);

console.log(IdolModel.groupName); // static 키워드를 쓰면 클래스 자체에 귀속이 된다.
console.log(IdolModel.returnGroupName());

/**
 * static 키워드를 가장 많이사용하는
 * factory constructor
 */
class IdolModel2 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel2(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel2(list[0], list[1]);
  }
}

const vui2 = IdolModel2.fromObject({ name: '뷔', year: 1995 });
console.log(vui2);

const jengKook = IdolModel2.fromList(['정국', 1997]);
console.log(jengKook);

/**
 * static함수를 써서 팩토리 컨스트럭터 형태를 구현하게 되면
 * 단순히 constructor 형태로만 우리가 인스턴스를 반환받지않고
 * 우리가 미리 어떤 데이터를 입력받아가지고 인스턴스를 만들지
 * 템플릿화 해서 정의를 해놓울수가 있다는 장점이 있다.
 */
