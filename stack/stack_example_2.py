# 문제 이해하기
# 접근 방법
# 코드 설계
# 코드 구현
from typing import List

temp = [1, 2, 3, 4, 5, 6, 7, 8, 11]


def solution(temperatures: List[int]):
    result = [0] * len(temperatures)
    stack = []

    for cur_day, cur_temp in enumerate(temperatures):
        while stack and stack[-1][1] < cur_temp:
            prev_day, _ = stack.pop()
            result[prev_day] = cur_day - prev_day
        stack.append((cur_day, cur_temp))
    return result

print(solution(temp))
