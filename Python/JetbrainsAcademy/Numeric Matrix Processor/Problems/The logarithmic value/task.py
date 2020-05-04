import math

positive = int(input())
number = int(input())

if number <= 0 or number == 1:
    print(round(math.log(positive), 2))
else:
    print(round(math.log(positive, number), 2))
