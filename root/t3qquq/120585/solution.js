function solution(array, height) {
  var answer = 0;

  array.push(height);
  array.sort((a, b) => b - a);

  for (; array[answer] > height; answer++) {}

  return answer;
}
