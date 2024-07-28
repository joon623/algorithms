
// 아래는 index가 없는 곳에서는 undefined와 불필요하게 비교하고
// 이미 정렬되 상태에서도 반복문을 돌게 된다.
function notOptimizedBubbleSort(arr) {
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr
}


const test1 = [33, 1, 25,4, 3];
const test2 = [33, 16, 25,26, 3];
console.log(notOptimizedBubbleSort(test1));
console.log(notOptimizedBubbleSort(test2));

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // 교환이 없으면 이미 정렬된 상태이므로 종료
    }

    return arr;
}

// 테스트 예시
const test3 = [33, 1, 25, 4, 3];
console.log(bubbleSort(test3)); // [1, 3, 4, 25, 33]
