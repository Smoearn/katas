def Descending_Order(num):
    return int(''.join(sorted(str(num), reverse=True)))


print(Descending_Order(0), 0)
print(Descending_Order(15), 51)
print(Descending_Order(123456789), 987654321)