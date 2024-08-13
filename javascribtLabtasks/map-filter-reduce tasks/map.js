let mix = [1, 2, 3, 'N', 4, 5, 6, 'A', 7, 8, 9, 'D', 6, 4, 'A'];

let result = mix
    .map(ele => (typeof ele === 'string' ? ele : ''))
    .reduce((acc, cur) => (cur ? acc + cur : acc), '');

console.log(result);