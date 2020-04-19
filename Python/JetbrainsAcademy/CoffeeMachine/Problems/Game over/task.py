scores = input().split()
# put your python code here
failure_count = 0
score = 0

for c in scores:
    if c == "I":
        failure_count += 1
        if failure_count == 3:
            print("Game over")
            break
    else:
        score += 1
else:
    print("You won")

print(score)
