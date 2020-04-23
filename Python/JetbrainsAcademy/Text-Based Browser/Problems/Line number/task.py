# read sample.txt and print the number of lines
file = open('sample.txt', 'r')
lines = sum(1 for line in file)
print(lines)
file.close()
