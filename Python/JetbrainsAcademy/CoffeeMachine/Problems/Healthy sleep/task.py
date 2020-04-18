min_hours = int(input())
max_hours = int(input())
hours = int(input())

if hours < min_hours:
    print("Deficiency")
elif hours > max_hours:
    print("Excess")
else:
    print("Normal")
