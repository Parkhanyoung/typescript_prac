function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8))

function addAndDoSomething(num1: number, num2: number, cb: (result: number) => void) {
  const result = num1 + num2;
  cb(result);
}

const callback = (a: number): number => {
  return a
}
console.log(addAndDoSomething(1, 2, callback)); // undefined