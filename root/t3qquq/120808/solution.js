function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let ansDenom = denom1 * denom2;
  let ansNum = numer1 * denom2 + numer2 * denom1;

  let GCD = 1;

  for (let i = 2; i <= Math.min(ansDenom, ansNum); i++) {
    if (ansDenom % i === 0 && ansNum % i === 0) {
      GCD = i;
    }
  }

  answer = [ansNum / GCD, ansDenom / GCD];

  return answer;
}
