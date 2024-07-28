class MinHeap {
    constructor () {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }


    // 두 값을 바꿔주는 메서드
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length -1; // 새로운 노드가 추가된 위치
        let parentIdx = Math.floor((index -1) /2 ) // 부모 노드의 위치
        while(
            this.heap[parentIdx] && // 부모 노드 체크
                this.heap[index][1] < this.heap[parentIdx][1] // 자식 노드가 부모 노드보다 작은 경우
            ) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentI dx = Math.floor((index-1) /2 );
        }
    }
}

const heap = new MinHeap();
heap.add([1, 5]);
heap.add([2, 3]);
heap.add([3, 8]);
heap.add([4, 1]);

console.log(heap.heap); // 최소 힙의 배열 상태를 출력
