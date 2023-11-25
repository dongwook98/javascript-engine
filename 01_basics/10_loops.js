/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('--------------');

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log('--------------');

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형을 출력해라.
let square = '';
let side = 6;
for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += '*';
  }
  square += '\n';
}
console.log(square);

// i == 0, j == 0, square = '*'
// i == 0, j == 1, square = '**'
// i == 0, j == 5, square = '******' + '\n'
// i == 1, j == 0, square = '******' + '\n' + '*'

/**
 * for...in
 */
const dongwook = {
  name: '동욱',
  year: 1998,
  group: 'bts',
};

console.log('-------------');

for (let key in dongwook) {
  console.log(key);
}

console.log('-------------');

const btsMembersArray = ['뷔', '정국', 'RM', '지민', '제이홉', '슈가'];
for (let key in btsMembersArray) {
  console.log(key);
  console.log(`${key}: ${btsMembersArray[key]}`);
}

/**
 * for...of
 */
for (let value of btsMembersArray) {
  console.log(value);
}

/**
 * While
 */
let number = 0;

while (number < 10) {
  number++;
}
console.log(number);

/**
 * do...while -> 실무에서 안쓰임
 */
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log('-------------');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log('---------------------');
number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}

/**
 * continue
 */
console.log('-----------------');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log('----------------');

number = 0;
while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
