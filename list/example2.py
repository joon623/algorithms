# sort & Two Pointer
# 리스트 정렬 0(nLogn)
# 접근방법이 막힐때 Two Pointer를 사용하면 좋다.
nums = [1, 11, 22, 33]
target = 1001

def solution(nums, target):
    nums.sort()
    l, r = 0, len(nums)-1

    while l < r:
        if nums[l] + nums[r] > target:
            r -=1
        elif nums[l] + nums[r] < target:
            l +=1
        elif nums[l] + nums[r] == target:
            return True

    return False


print(solution(nums, target))