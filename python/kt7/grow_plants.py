def growing_plant(upSpeed, downSpeed, desiredHeight):
    ch = 0
    days = 0
    nights = 0
    
    while ch < desiredHeight:

print(growing_plant(100,10,910),10)
print(growing_plant(10,9,4),1)
print(growing_plant(5,2,0),1)
print(growing_plant(5,2,5),1)
print(growing_plant(5,2,6),2)





# Task

# Each day a plant is growing by upSpeed meters.
#  Each night that plant's height decreases by downSpeed meters due to the lack of sun heat.
#  Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

# Example

# For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.