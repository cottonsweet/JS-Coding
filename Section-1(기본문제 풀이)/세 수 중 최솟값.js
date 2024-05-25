/**
 * - 문제
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (정렬 금지, if 조건문으로만 해결 해야함)
 *
 * - 입력설명
 * 첫 번째 줄에 100이하의 세 자연수가 입력된다.
 *
 * - 출력설명
 * 첫 번째 줄에 가장 작은 수를 출력한다.
 *
 * - 입력예제 1
 * 6 5 11
 *
 * - 출력예제 1
 * 5
 */

function solution(a, b, c) {
  let answer;
  if (a >= 100 || b >= 100 || c >= 100) {
    return console.log("100 보다 크거나 같으면 안됩니다.");
  }

  if (a < b && c) {
    answer = a;
  } else if (b < a && c) {
    answer = b;
  } else if (c < a && b) {
    answer = c;
  } else if (a === b || c) {
    answer = a;
  }
  console.log(answer);
}

solution(20, 20, 20);
