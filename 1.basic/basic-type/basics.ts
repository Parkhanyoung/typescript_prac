function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1;
number1 = '3'; // any type으로 초기화되었기 때문에 number형만 받는 add에 넣어도 오류가 안 난다.
const number2 = 10;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);