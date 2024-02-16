def solution(prices):
    answer = [0] * len(prices)
    stack = []
    for idx, price in enumerate(prices):
        if not stack:
            stack.append((idx, price))
        elif stack and stack[-1][1] <= price:
            stack.append((idx, price))
        elif stack and stack[-1][1] > price:
            while stack and stack[-1][1] > price:
                old_idx, old_price = stack.pop(-1)
                answer[old_idx] = idx - old_idx
            stack.append((idx, price))

    for item in stack:
        answer[item[0]] = len(prices) - 1 - item[0]

    return answer

print(solution([1, 2, 3, 2, 3]))
print(solution([1, 1, 2, 1, 1]))
print(solution([1, 111, 2122, 1, 1]))
