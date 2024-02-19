def solution(num):
    if num == 1:
        return 0
    count = 0

    while num != 1 and count < 500:
        if num % 2 == 0:
            num = num / 2
        elif num % 2 == 1:
            num = num * 3 + 1
        count = count + 1
    return count if num == 1 else -1


print(solution(4))