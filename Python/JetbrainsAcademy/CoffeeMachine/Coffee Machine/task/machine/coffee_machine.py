# Write your code here
water = 400
milk = 540
coffee_beans = 120
cups = 9
money = 550


def buy():
    coffee_type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n> ")
    if coffee_type == "back":
        return
    else:
        coffee_type = int(coffee_type)

    global money
    if coffee_type == 1:
        try_make_coffee(250, 0, 16)
        money += 4
    elif coffee_type == 2:
        try_make_coffee(350, 75, 20)
        money += 7
    elif coffee_type == 3:
        try_make_coffee(200, 100, 12)
        money += 6


def try_make_coffee(water_requirement, milk_requirement, beans_requirement):
    global water, milk, coffee_beans, cups, money
    if cups - 1 < 0:
        print_status_msg("cups")
    if water - water_requirement < 0:
        print_status_msg("water")
    elif milk - milk_requirement < 0:
        print_status_msg("milk")
    elif coffee_beans - beans_requirement < 0:
        print_status_msg("coffee beans")
    else:
        water -= water_requirement
        milk -= milk_requirement
        coffee_beans -= beans_requirement
        cups -= 1
        print("I have enough resources, making you a coffee!")


def fill():
    global water, milk, coffee_beans, cups, money
    water_fill = int(input("Write how many ml of water do you want to add:\n> "))
    milk_fill = int(input("Write how many ml of milk do you want to add:\n> "))
    coffee_beans_fill = int(input("Write how many grams of coffee beans do you want to add:\n> "))
    cups_fill = int(input("Write how many disposable cups of coffee do you want to add:\n> "))
    water += water_fill
    milk += milk_fill
    coffee_beans += coffee_beans_fill
    cups += cups_fill


def take():
    global money
    print(f"I gave you ${money}")
    money = 0


def state():
    print(f"\nThe coffee machine has:\n{water} of water\n{milk} of milk\n{coffee_beans} of coffee beans\n{cups} of "
          f"disposable cups\n{money} of money\n")


def print_status_msg(msg):
    print(f"Sorry, not enough {msg}!")


while True:
    option = input("Write action (buy, fill, take, remaining, exit):\n> ")

    if option == "buy":
        buy()
    elif option == "fill":
        fill()
    elif option == "take":
        take()
    elif option == "remaining":
        state()
    elif option == "exit":
        break
