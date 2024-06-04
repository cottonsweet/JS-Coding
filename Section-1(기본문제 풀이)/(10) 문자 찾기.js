/**
 * - 문제
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은
 * 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 *
 * - 입력설명
 * 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
 *
 * - 출력설명
 * 첫 줄에 해당 문자의 개수를 출력한다.
 *
 * - 입력예제 1
 * COMPUTERPROGRAMMING
 * R
 *
 * - 출력예제 1
 * 3
 */

// 솔루션 1
function solutionOne(arr) {
  let count = 0;

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === arr[1]) {
      count++;
    }
  }
  return count;
}

console.log(solutionOne(["COMPUTERPROGRAMMING", "R"]));

// 솔루션 2
function solutionTwo(str, text) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === text) {
      count++;
    }
  }

  return count;
}

console.log(solutionTwo("COMPUTERPROGRAMMING", "R"));

// 솔루션 3
function solutionThree(str, text) {
  let count = 0;

  for (let v of str) {
    if (v === text) {
      count++;
    }
  }

  return count;
}

console.log(solutionThree("COMPUTERPROGRAMMING", "R"));

// 솔루션 4
function solutionFour(str, text) {
  let answer = str.split(text).length;
  return answer - 1;
}

console.log(solutionFour("COMPUTERPROGRAMMING", "R"));
