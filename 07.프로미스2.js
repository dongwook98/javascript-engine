let a = 2;

const p = new Promise((resolve, reject) => {
  console.log('제일 먼저'); // (1)
  setTimeout(() => {
    a = 5;
    console.log(a); // (3)
    resolve(a);
  }, 0);
});

// 딴짓
// 딴짓
// 딴짓
console.log('딴짓'); // (2)
// 딴짓
// 딴짓
// 딴짓

p.then((result) => {
  console.log('result', result); // (4)
});

// 제일 먼저
// 딴짓
// 5
// result 5
