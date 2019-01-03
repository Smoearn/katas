from functools import reduce
from operator import mul


def persistence(n, count = 0): 
    if n < 10:
        return count

    new_number= reduce(mul,map(int, str(n)))

    return persistence(new_number, count + 1)



    

    
    
 

        


print(persistence(39))
print(persistence(4), 0)
print(persistence(25), 2)
print(persistence(999), 4)
