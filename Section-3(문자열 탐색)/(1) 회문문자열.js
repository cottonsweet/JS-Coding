/**
 * - 문제
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 "NO"를 출력해라
 *
 * 단 회문을 검사할 때 대소문자를 구분하지 않는다.
 *
 * - 입력설명
 * 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
 *
 * - 출력설명
 * 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
 *
 * - 입력예제 1
 * gooG
 *
 * - 출력예제 1
 * YES
 */

function solutionOne(arr) {
  const reverseStr = arr.toLowerCase().split("").reverse().join("");

  if (reverseStr === arr.toLowerCase()) {
    return "YES";
  }
  return "NO";
}

console.log(solutionOne("gooG"));

function solutionTwo(arr) {
  let ans = "YES";
  arr = arr.toLowerCase();
  let len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - i - 1]) return "NO";
  }

  return ans;
}

console.log(solutionTwo("goooG"));
