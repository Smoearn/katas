import math


def balanced_num(number):
    nl = list(map(int, str(number)))
    mi = float(len(nl) +1) / 2
    
    right = sum(nl[int(math.ceil(mi)):])
    left = sum(nl[:int(math.floor(mi)) - 1])

    if right == left:
        return ("Balanced")
    return ("Not Balanced")

        


#Test.describe("Sample Tests")

print(balanced_num(7)  , "Balanced")
print(balanced_num(959), "Balanced")
print(balanced_num(13) , "Balanced")
print(balanced_num(432), "Not Balanced")
print(balanced_num(424), "Balanced")

#Test.it("Check Large Number")
print(balanced_num(1024)    , "Not Balanced")
print(balanced_num(66545)   , "Not Balanced")
print(balanced_num(295591)  , "Not Balanced")
print(balanced_num(1230987) , "Not Balanced")
print(balanced_num(56239814), "Balanced")