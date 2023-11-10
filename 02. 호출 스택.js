const x = 'x';
function c() {
  const y = 'y';
  console.log('c');
}

function a() {
  // 여기서 부터 시작!
  const x = 'x';
  console.log('a');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
  b();
}

a();
c();
