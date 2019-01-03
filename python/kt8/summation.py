def summation(num):
    count = 0
    sumOf = 0
    for r in range(num):
        count +=1
        sumOf = sumOf + count

    return sumOf
    


print(summation(1), 1)
print(summation(8), 36)




# Summation

# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

# For example:

# summation(2) -> 3
# 1 + 2

# summation(8) -> 36
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
