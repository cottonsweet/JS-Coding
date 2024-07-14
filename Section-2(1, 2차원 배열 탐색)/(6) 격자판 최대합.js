/**
 * - 문제
 * N*N의 격자판 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력한다.
 *
 * - 입력설명
 * 첫 줄에 자연수 N이 주어진다
 * 두 번째 줄부터 N줄에 걸쳐 각 줄에 자연수가 주어진다.
 *
 * - 출력설명
 * 최대합을 구한다.
 *
 * - 입력예제 1
 * 10 13 10 12 15
 * 12 39 30 23 11
 * 11 25 50 53 15
 * 19 27 29 37 27
 * 19 13 30 13 19
 *
 * - 출력예제 1
 * 155
 */

function solution(arr) {
  let result = Number.MIN_SAFE_INTEGER;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    result = Math.max(result, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - i - 1];
  }
  result = Math.max(result, sum1, sum2);
  return result;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
