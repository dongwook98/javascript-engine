// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.

// promise, process.nextTick -> micro, 나머지는 매크로 태스크 큐
setImmediate(() => {
  console.log('a');
});
setTimeout(() => {
  console.log('b');
}, 0);
setTimeout(() => {
  console.log('c');
}, 1000);
setTimeout(() => {
  console.log('d');
}, 2000);
Promise.resolve().then(() => {
  console.log('p');
});
