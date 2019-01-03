import re

# def pattern(n):
#     # output = list()
#     # test = str()
#     # container = str(range(1, n+1))
#     # return container
#     # output.append(container)
#     # if n == 0:
#     #     return ''
#     # elif n == 1:
#     #     return '1'

#     # c = 0
#     # while c < n:
#     #     container = container[1:n] + container[0:1]
#     #     output.append(container)
#     #     c += 1

#     # for i in output:
#     #     if test = 
#     #     test = test + '\n' + str(i)

#     # test = ''.join(x for x in test if x.isdigit() or x == '\n')
#     # return test



# def pattern(n):
#     output = list()
#     scope = ''.join(filter(lambda x: x.isdigit(), str(list((range(1,n+1))))))
#     output.append(scope)

#     c = 0
#     while c < n - 1:
#         scope = scope[1:] + scope[:1]
#         output.append(scope)
#         c += 1

#     printout = str()

#     for i in output:
#         printout = printout + i + '\n'

#     return printout[:-1]


# print(pattern(15))



# def pattern(n):
#     scope = list(range(1, n+1))
#     output = list()
#     output.append(scope)
#     text_output = str()

#     c = 0
#     while c < n - 1:
#         scope = scope[1:] + scope[:1]
#         output.append(scope)
#         c += 1

#     for i in output:
#         text_output = text_output + ''.join(filter(lambda x: x.isdigit(), str(i))) + '\n'

#     return text_output[0:-1]





































# print(pattern(1),"1")
# print(pattern(41),"1234\n2341\n3412\n4123")
# print(pattern(0),"")

# 123456789101112131415\n
# 234567891011121314151\n
# 345678910111213141512\n
# 456789101112131415123\n
# 567891011121314151234\n
# 678910111213141512345\n
# 789101112131415123456\n
# 891011121314151234567\n
# 910111213141512345678\n
# 101112131415123456789\n
# 111213141512345678910\n
# 121314151234567891011\n
# 131415123456789101112\n
# 141512345678910111213\n
# 151234567891011121314'