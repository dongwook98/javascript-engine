/**
 * Object / 객체
 */

// key : value pair
let dongwook = {
  name: '동욱',
  group: 'BTS',
  coding: function () {
    return `${this.name}이 코딩을 합니다.`;
  },
};

console.log(dongwook);
console.log(dongwook.name);
console.log(dongwook['name']);

const key = 'name';
console.log(dongwook[key]);

console.log(dongwook.coding());

const nameKey = 'name';
const nameValue = '동욱';

const groupKey = 'group';
const groupValue = 'BTS';

const dongwook2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  coding: function () {
    return `${this.name}이 코딩을 합니다.`;
  },
};
console.log(dongwook2);
console.log(dongwook2.coding());

dongwook2['group'] = '코드팩토리';
console.log(dongwook2);

dongwook2['englishName'] = 'Kang Dong Wook';
console.log(dongwook2);

delete dongwook2['englishName'];
console.log(dongwook2);

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const vui = {
  name: '뷔',
  group: 'BTS',
};
console.log(vui);

// vui = {};

vui['group'] = '코드팩토리';
console.log(vui);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(vui));

/**
 * 모든 밸류값 다 가져오기
 */
console.log(Object.values(vui));

// 키값과 밸류의 변수가 같을경우 하나만 적어도 된다.
const name = '정국';
const jengKook = {
  name: name,
  name,
};
console.log(jengKook);
