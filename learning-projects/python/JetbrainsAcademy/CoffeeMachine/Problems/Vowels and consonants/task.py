characters = list(input())

for c in characters:
    if not c.isalpha():
        break
    if c in "aeiou":
        print("vowel")
    else:
        print("consonant")
