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
