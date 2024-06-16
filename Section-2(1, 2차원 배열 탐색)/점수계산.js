function solution(arr) {
    let count = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        count++;
        result += count;
      } else {
        count = 0;
      }
    }
  
    return result;
  }
  
  console.log(solution([1, , 0, 1, 1, 0]));