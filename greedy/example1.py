def solution(n, lost, reserve):
    if len(lost) == 0:
        return n

    count = 0
    count = count - len(lost)

    for num in reserve:
        min = num - 1
        max = num + 1
        for los in lost:
            if min <= los and max >= los:
                count = count + 1

    return count