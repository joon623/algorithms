def hash_solution(nums, target):
    memo = {}
    for v in nums:
        memo[v] = 1

    for v in  nums:
        needed_number = target - v
        if needed_number in memo:
            return True

    return False


print(hash_solution([4, 1, 9, 7, 5, 3, 16], 5))
