import re

# def is_turing_equation(s):
#     container = filter(None, re.split(r'(\d+)', s))
#     reversed_container = list()
#     for i in container:
#         if i.isdigit():
#             reversed_container.append(i[::-1])
#         else:
#             reversed_container.append(i)
#     if int(reversed_container[0]) + int(reversed_container[2]) == int(reversed_container[4]):
#         return True
#     else:
#         return False


def is_turing_equation(s):
    c = filter(None, re.split(r'(\d+)', s))
    c = [i[::-1] for i in c if i.isdigit()]
    return True if int(c[0]) + int(c[1]) == int(c[2]) else False





basic_tests = [
	('73+42=16',True),
	('5+8=13',False),
	('10+20=30',True),
	('0001000+000200=00030',True),
	('1234+5=1239',False),
	('1+0=0',False),
	('7000+8000=51',True),
	('0+0=0',True)
]

for s,res in basic_tests:
	print(is_turing_equation(s),res)
