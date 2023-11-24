/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * Number 타입
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-------------------');

/**
 * String 타입
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const bts = "'BTS' 뷔";
console.log(bts);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newLine -> \n
 * 2) tap -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면 된다.
 *
 */
const btsVui = 'BTS\n뷔';
console.log(btsVui);
const btsJungKook = 'BTS\t정국';
console.log(btsJungKook);
const backSlash = 'BTS\\코드팩토리';
console.log(backSlash);
// const smallQutoation = 'BTS\'코드팩토리';
// console.log(smallQutoation);

const btsJungKook2 = `BTS '" / / / / / /
정국`;
console.log(btsJungKook2);
console.log(typeof btsJungKook2);

const groupName = 'BTS';
console.log(groupName + ' 뷔');
console.log(`${groupName} 뷔`);
console.log('----------------');

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('-------------------');

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * 키:밸류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
  red: '빨간색',
  orange: '주황색',
  yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const btsMembersArray = ['뷔', '정국', 'RM', '진', '슈가', '제이홉', '지민'];
console.log(btsMembersArray);

/**
 * index
 *
 * 0부터 시작한다.
 * 1씩 올라간다.
 */
console.log(btsMembersArray[0]);
console.log(btsMembersArray[5]);

btsMembersArray[0] = '강동욱';
console.log(btsMembersArray);
console.log(typeof btsMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를한다. (C언어)
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */
