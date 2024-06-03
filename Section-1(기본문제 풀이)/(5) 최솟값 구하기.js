/**
 * - 문제
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 *
 * - 입력설명
 * 첫 번째 줄에 7개의 수가 주어진다.
 *
 * - 출력설명
 * 첫 번째 줄에 가장 작은 값은 출력한다.
 *
 * - 입력예제 1
 * 5 3 7 11 2 15 17
 *
 * - 출력예제 1
 * 2
 */

// 솔루션 1
function solutionOne(arr) {
  const result = Math.min(...arr);

  return result;
}

console.log(solutionOne([5, 3, 7, 11, 2, 15, 17]));

// 솔루션 2
function solutionTwo(arr) {
  // 안전한 정수 최댓값
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(solutionTwo([5, 3, 7, 11, 2, 15, 17]));

// 솔루션 3
function solutionThree(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(solutionThree([5, 3, 7, 11, 1090, 15, 17]));
