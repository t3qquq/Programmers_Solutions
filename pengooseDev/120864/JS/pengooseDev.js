function solution(my_string) {
  const stringArr = my_string
    .split('')
    .map((v) => (!Number(v) ? (v === '0' ? v : '|') : v));
  const myArr = [];
  const end = stringArr.reduce((acc, curr) => {
    if (curr === '|') {
      myArr.push(acc);
      return '|';
    }

    if (acc === '|' && Number(curr)) return curr;

    return (acc += curr);
  });

  if (Number(end)) myArr.push(end);

  return myArr
    .filter((v) => Number(v))
    .map((v) => Number(v))
    .reduce((acc, curr) => (acc += curr), 0);
}
