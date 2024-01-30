# Two SUm


def solution(nums, target):
    for index, num in enumerate(nums):
        for idx, n in enumerate(nums):
            if index != idx and num + n == target:
                    return True

    return False

nums = [1,2, 1111]
target =1112
print(solution(nums, target))