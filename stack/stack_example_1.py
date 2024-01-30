# Stack의 다양한 활용
# 1. LiFO 특성을 활용한 문제
# 2. DFS에 사용

# Valid Parentheses
# '(){}'를 포함하고 있는 문자열 s가 주어졌을 때 괄호가 유효한지 아닌지 판별하시오.

# s {(([]))[]}

def solution(inputs: str):
    stack = []

    for p in inputs:
        if p == "(":
            stack.append(")")
        elif p == "[":
            stack.append("]")
        elif p == "{":
            stack.append("}")
        elif not stack or stack.pop() != p:
            return False

    return not stack

print(solution("{(([]))[]}"))