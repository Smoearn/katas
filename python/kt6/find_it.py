from collections import Counter


# def find_it(seq):
#     test = Counter(seq)
#     for k, v in test.items():
#         if v%2 != 0:
#             return k


def find_it(seq):
    return [k for k,v in Counter(seq).items() if v%2!=0][0]

    # test = Counter(seq)
    # for k, v in test.items():
    #     if v%2 != 0:
    #         return k



print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5)
