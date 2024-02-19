# 재귀 

재귀함수란 자신을 정의할 때 자기 자신을 재참조하는 함수를 뜻한다.

```python
def factorial(n):
    if n == 1:
        return 1 
    return n * factorial(n-1)

def fibo(n):
    if n == 1 or n ==2:
        return 1 
    return fibo(n-2) + fibo(n-1)  
```

## 구성요소 2가지 
### 점화식 => recurrence relation 

### Base Case
- 더이상 재귀호출을 하지 않아도 계산값을 반환할 수 있는 상황을 말한다. 
- 모든 입력이 최종적으로 base case를 이용해서 문제를 해결할 수 있어야 한다. 
- basecase가 무조건 있어야 재귀함수가 무한루프를 방지할 수 있다.

### 시간복잡도 
- 재귀함수 전체 시간복잡도 = 재귀 함수 호출 수 x (재귀 함수 하나당) 시간 복잡도