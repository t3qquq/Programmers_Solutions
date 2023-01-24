function solution(numbers) {
  var answer = [];

  if (-10000 <= Math.min(...numbers) && Math.max(...numbers) <= 10000)
    if (1 <= numbers.length && numbers.length <= 1000)
      for (let i = 0; i < numbers.length; i++) numbers[i] = numbers[i] * 2;

  answer = numbers;

  return answer;
}
