

# 그래프 
그래프는 정점(vertax)와 간선(edge)들로 이루어진 자료구조이다.

## 그래프의 활용 
연결 관계를 표현하기에 현실 세계의 사물이나 추상적인 개념들을 잘 표현할 수 있다.
- 도시 연결하는 도로망: 도시(Vertax), 도로(edge)
- 컴퓨터 네트워크: 컴퓨터와 라우터(vertax), 라우터간의 연결 관계 (edge)

## 그래프 표현 
- 인접 행렬(Adjacency Matrix)
- 인접 리스트(Adjacency List)
- 암시적 그래프

## 그래프의 순회 
그래프의 순회는 트리의 순회와 마찬가지고 모든 정점을 지나야 한다. 
BFS와 DFS가 있다.

### Breath First Search
그래프를 순회할 때 시작점이 주어질텐데 이를 루트 노드라 생각하여 level별로 탐색하는 것이 BFS이다.

```javascript
const graph = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [7],
    6: [],
    7: []
}

function bfs(graph, startVertax) {
    const visited = [startVertax];
    const queue = [startVertax];
    while (queue.length > 0) {
        const currentVertax = queue.shift();
        for (const key in graph[currentVertax]) {
            if(!visited.includes(key)) {
                visited.push(key);
                queue.push(key)
            }
        }
    }
}
```

### Depth-first search (깊이 우선 탐색) DFS
