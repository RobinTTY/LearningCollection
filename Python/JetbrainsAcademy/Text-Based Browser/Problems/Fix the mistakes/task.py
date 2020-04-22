text = input()
words = text.split()

for word in words:
    # finish the code here
    if word.lower().startswith(("www.", "http://", "https://")):
        print(word)