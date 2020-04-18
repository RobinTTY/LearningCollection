water = int(input("Write how many ml of water the coffee machine has:\n> "))
milk = int(input("Write how many ml of milk the coffee machine has:\n> "))
beans = int(input("Write how many grams of coffee beans the coffee machine has:\n> "))
requested_cups = int(input("Write how many cups of coffee you will need:\n> "))
max_cups = min(water // 200, milk // 50, beans // 15)

if water >= 200 * requested_cups and milk >= 50 * requested_cups and beans >= 15 * requested_cups:
    if max_cups > requested_cups:
        print(f"Yes, I can make that amount of coffee (and even {max_cups - requested_cups} more than that)")
    else:
        print("Yes, I can make that amount of coffee")
else:
    print(f"No, I can make only {max_cups} cups of coffee")
