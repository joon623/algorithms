// 가장 긴 연속된 수의 갯수
// o(n)으로 풀어야 시간복잡도에 걸리지 않는다.

function solution(nums) {
    if(nums.length === 0) {
        return 0
    }

    const results = [];
    const hashNums = [...new Set(nums)];
    hashNums.sort((a,b) => a-b);
    let currentNums = 1;
    hashNums.forEach((el, idx) => {
        if(idx !== 0) {
            if(hashNums[idx-1]  === el-1) {
                currentNums++;
            } else {
                results.push(currentNums);
                currentNums = 0;
            }
        }
    })
    return Math.max(...results);
}

console.log(solution([100,4,200,1,3,2]));
console.log(solution([6,7,100,5,4,4]));