n = int(input())

my_stack = list()
for _i in range(0, n):
    my_stack.append(input())

for _i in range(0, n):
    print(my_stack.pop())
