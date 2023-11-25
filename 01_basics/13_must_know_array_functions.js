/**
 * Array Functions
 */
let btsMembers = ['뷔', '정국', 'RM', '제이홉', '슈가', '지민'];

console.log(btsMembers);

// push()
console.log(btsMembers.push('동욱')); // 요소 추가한 배열길이 반환
console.log(btsMembers);

console.log('----------------');
// pop()
console.log(btsMembers.pop()); // 제거한 요소 반환
console.log(btsMembers);

console.log('----------------');
// shift()
console.log(btsMembers.shift()); // 제거한 요소 반환
console.log(btsMembers);

// unshift()
console.log(btsMembers.unshift('뷔')); // 요소 추가한 배열길이 반환
console.log(btsMembers);

console.log('----------------');

// splice()
console.log(btsMembers.splice(0, 3)); // 삭제한 요소들 배열 반환
console.log(btsMembers);

btsMembers = ['뷔', '정국', 'RM', '제이홉', '슈가', '지민'];
console.log(btsMembers);

// concat()
console.log(btsMembers.concat('동욱')); // 요소 추가하고 새로운 배열 반환
console.log(btsMembers);

// slice()
console.log(btsMembers.slice(0, 3));
console.log(btsMembers);

// spread operator
let btsMembers2 = [...btsMembers];
console.log(btsMembers2);

let btsMembers3 = [btsMembers];
console.log(btsMembers3);

console.log('-----------------');
let btsMembers4 = btsMembers;

console.log(btsMembers4);
console.log(btsMembers4 === btsMembers);

console.log([...btsMembers] === btsMembers);

// join()
console.log(typeof btsMembers.join(), btsMembers.join());
console.log(btsMembers.join('/'));
console.log(btsMembers.join(', '));

// sort()
// 오름차순
btsMembers.sort();
console.log(btsMembers);

console.log(btsMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
console.log('---------------------');
console.log(btsMembers.map((x) => x));
console.log(btsMembers.map((x) => `BTS: ${x}`));

console.log(
  btsMembers.map((x) => {
    if (x === '뷔') {
      return `BTS: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(btsMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((v) => v % 2 === 0));

// find()
console.log(numbers.find((v) => v % 2 === 0));

// findIndex()
console.log(numbers.findIndex((v) => v % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 btsMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환해라
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(btsMembers);
console.log(btsMembers.reduce((p, n) => p + n.length, 0));
