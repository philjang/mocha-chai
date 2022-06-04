function findMax(arr) {
    if (!arr) return 'no input provided';
    if (typeof arr === 'number' || typeof arr === 'string') return 'invalid input type';
    if (!arr.length) return 'input array empty';
    let max = -Infinity;
    for (let i=0;i<arr.length;i++) {
        if (Number(arr[i]) > max) max = Number(arr[i]);
    };
    return max;
}
// console.log(findMax([1,3,2]));
// console.log(findMax([-1,-2,-3]));
// console.log(findMax(['1','3','2']));
// console.log(findMax());
// console.log(findMax('hello'));
// console.log(findMax(1,2));
// console.log(findMax(2));
// console.log(findMax([]));

module.exports = findMax;