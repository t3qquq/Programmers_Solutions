function solution(array) {
  var answer = 0;

  array.sort((a, b) => a - b);

  if (array.length % 2 == 1)
    if (0 < array.length && array.length < 1000)
      if (-1000 < Math.min(...array) && Math.max(...array) < 1000)
        answer = array[Math.floor(array.length / 2)];
  return answer;
}
