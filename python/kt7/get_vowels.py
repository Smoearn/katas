def getCount(inputStr):
    vowels = ['a', 'e', 'i', 'o']
    num_vowels = 0


    for i in inputStr:
        if i in vowels:
            num_vowels +=1
    return num_vowels

print(getCount("abracadabra"), 5)