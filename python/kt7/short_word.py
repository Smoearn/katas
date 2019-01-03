# def find_short(s):
#     container = s.split(' ')
#     max_lengt = len(s)
#     for i in container:
#         if len(i) < max_lengt:
#             max_lengt = len(i)


#     return max_lengt # l: shortest word length


def find_short(s):
    return min([len(x) for x in s.split(' ')])

print(find_short("bitcoin take over the world maybe who knows perhaps"), 3)
print(find_short("turns out random test cases are easier than writing out basic ones"), 3)
print(find_short("lets talk about javascript the best language"), 3)
print(find_short("i want to travel the world writing code one day"), 1)
print(find_short("Lets all go on holiday somewhere very cold"), 2)