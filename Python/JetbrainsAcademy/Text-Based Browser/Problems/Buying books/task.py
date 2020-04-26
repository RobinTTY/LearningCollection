n = int(input())
actions = list()
books = list()


for _ in range(0, n):
    actions.append(input())

for action in actions:
    split_action = action.split(' ', 1)
    if split_action[0] == "BUY":
        books.append(split_action[1])
    elif split_action[0] == "READ":
        print(books.pop())
