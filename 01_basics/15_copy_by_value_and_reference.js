/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);

clone += ' 강동욱 입니다.';
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
  name: '뷔',
  group: 'BTS',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: '정국',
  group: 'BTS',
};
cloneObj = {
  name: '정국',
  group: 'BTS',
};
console.log(originalObj === cloneObj);

const vui1 = {
  name: '뷔',
  group: 'BTS',
};
const vui2 = vui1;
const vui3 = {
  name: '뷔',
  group: 'BTS',
};
console.log(vui1 === vui2); // true
console.log(vui1 === vui3); // false
console.log(vui2 === vui3); // false

/**
 * Spread Operator
 */
const vui4 = {
  ...vui3,
};
console.log(vui4);

console.log(vui4 === vui3);

const vui5 = {
  year: 1998,
  ...vui3,
};
console.log(vui5);

// spread operator는 위치가 중요하다.
const vui6 = {
  name: '코드팩토리',
  ...vui3,
};
console.log(vui6);

const vui7 = {
  ...vui3,
  name: '코드팩토리',
};
console.log(vui7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];
console.log(numbers2);
