sum_seq = 0


def sum_sequence(i):
    global sum_seq
    sum_seq += i
    return sum_seq


sequence = list(input())
print([sum_sequence(int(x)) for x in sequence])

# better but not supported atm
# sequence = list(input())
# sum_seq = 0
# [sum_seq := sum_seq + int(x) for x in sequence]
