// type[] => 지정한 type이 들어가는 배열

let a: number[] = [1, 2]; // typescript가 자동으로 type 추론
let b: string[] = ["li", "1"];
let c = [true];

// optional
// name은 항상 가지고 있고 age는 선택적으로 가지고 있을 때
const player: { name: string; age?: number } = {
  name: "nico",
};
// 왼쪽의 피 연산자가 true인 경우 오른쪽 연산자 값을 반환
if (player.age && player.age < 10) {
}

// alias type
type Age = number;

type Player = {
  readonly name: string;
  age?: Age;
};
const nico: Player = {
  name: "nico",
};
const lynn: Player = {
  name: "lynn",
  age: 12,
};

// nico.name = "lala"

const playerMaker = (name: string): Player => ({ name });
const uk = playerMaker("nico");
uk.age = 12;

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1)

const names: readonly string[] = ["1", "2"];
// names.push("3")

//Tuple
const players: readonly [string, number, boolean] = ["nico", 12, false];
// players[0] = 1

// 어떤 타입인지 모르는 변수 지정 => API로 응답을 받는데, 어떤 값인지 모르는 경우
// unknown

let d: unknown;
if (typeof d === "number") {
  // 범위 내에서 d는 number
  let e = d + 1;
}
if (typeof d === "string") {
  let e = d.toUpperCase();
}

// void
function hello(): void {
  console.log("x");
}

// never
function hi(title: string | number) {
  if (typeof title === "string") {
    title; // string
  } else if (typeof title === "number") {
    title; // number
  } else {
    // title은 string 혹은 number를 받기 때문에 이 부분의 title은 절대 작동할 일이 없음
    title;
  }
}

// const add = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add3: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// Polymorphism
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0]

const q = superPrint([1, 2, 3, 4]);
const w = superPrint([true, false, true]);
const e = superPrint(["a", "b"]);
const r = superPrint([1, 2, true, false, "a", "b"]);

export {};
