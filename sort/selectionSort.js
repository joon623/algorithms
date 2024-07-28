
// 선택 정렬 (Selection Sort)
// 선택 정렬은 매 단게에서 가장 작은 원솔르 선택해서 앞으로 보내는 정렬 방법이다.
// 앞으로 보내진 원소는 더 이상 위치가 변경되지 않는다.
// 시간 복잡도 O(n^2)로 비효율적인 정렬 알고리즘 중 하나이다.

function selectionSort(arr) {

    for(let i =0; i < arr.length; i++) {
        let minIndex = i;

        for (let j =i+1; j < arr.length; j++) {
            if(arr[j] <arr[minIndex]) {
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}


// 예시 실행
const test1 = [4, 5, 3, 2, 1, 2, 3];
const test2 = [4, 5, 3, 1, 2];
console.log(selectionSort(test1)); //[1, 2, 2, 3,3, 4, 5]
console.log(selectionSort(test2)); // [ 1, 2, 3, 4, 5 ]