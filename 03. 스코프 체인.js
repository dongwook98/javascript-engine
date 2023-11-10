const x = 'x1';
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
  // 여기서 부터 시작!
  const x = 'x2';
  console.log('a');
  b();
  console.log(x);
}

a();
c();
