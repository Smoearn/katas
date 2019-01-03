# https://www.geeksforgeeks.org/factorial-in-python/
import math

def strong_num(number):
    #turn number into list of integers
    #calculate each factorial of the list
    #If total som of each factorial is = number the strong

    nl = [int(x) for x in str(number)]
    factsum = [int(sum(math.factorial(x) for x in nl))]

    if factsum[0] == number:
        return "STRONG!!!!"
    return "Not Strong !!"




print(strong_num(1)  , "STRONG!!!!")
print(strong_num(2)  , "STRONG!!!!")
print(strong_num(145), "STRONG!!!!")
print(strong_num(7)  , "Not Strong !!")
print(strong_num(93) , "Not Strong !!")
print(strong_num(185), "Not Strong !!")
