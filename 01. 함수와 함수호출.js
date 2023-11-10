const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5); // 8
calculator(add(), 3, 5); // ❌

document.querySelector('#header').addEventListener('click', add()); // ❌ // add() : undefind + undefind
document.querySelector('#header').addEventListener('click', add); // ⭕️

const onClick = () => (event) => {
  console.log('hello');
};

document.querySelector('#header').addEventListener('click', onClick()); // ⭕️

// 리액트 예제
import { useCallback } from 'react';

export const App = () => {
  const onClick = useCallback(
    () => (e) => {
      console.log(e.target);
    },
    []
  );

  return <div onClick={onClick()}></div>;
};
