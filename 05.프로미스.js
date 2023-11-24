const 성공 = true;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (성공) {
      resolve();
    } else {
      reject();
    }
  }, 10000);
});

promise.then(() => {
  console.log('10초 지났습니다.');
});

console.log(1);
const promise2 = new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
    resolve();
  }, 0);
});
promise2.then(() => {
  console.log(4);
});
