def high_and_low(numbers):
    return str(max([int(x) for x in numbers.split(' ')])) + ' ' + str(min([int(x) for x in numbers.split(' ')]))

print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
