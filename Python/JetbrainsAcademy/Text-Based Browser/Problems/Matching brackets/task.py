expression = list(input())
check_stack = list()

for char in expression:
    if char == '(':
        check_stack.append(char)
    elif char == ')':
        if len(check_stack) == 0:
            print("ERROR")
            break
        check_stack.pop()
else:
    if len(check_stack) == 0:
        print("OK")
    else:
        print("ERROR")
