const x = 'x1';
console.log(z);
var y = 'hehe';
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  const x = 'x2';
  console.log(x);
  console.log('a');
  b();
}

a(); // a, b, c
c(); // c

// 아래 코드는 호이스팅 된 코드
// var y; // var은 초기화 단계(undefined)까지만 호이스팅된다..

// function c() {
//   const y = 'y';
//   console.log('c');

//   function b() {
//     const z = 'z';
//     console.log('b');
//     c();
//   }
// } // 함수 선언문 통째로 위로 올라옴

// function a() {
//   const x = 'x';
//   console.log('a');
//   b();
// } // 함수 선언문 통째로 위로 올라옴

// const x = 'x1';
// console.log(z);
// y = 'hehe';
// const z = () => {};

// a(); // a, b, c
// c(); // c
