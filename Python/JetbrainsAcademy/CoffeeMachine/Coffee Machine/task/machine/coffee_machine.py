# Write your code here
water = 1200
milk = 540
coffee_beans = 120
cups = 9
money = 550


def buy():
    coffee_type = int(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n> "))
    global water, milk, coffee_beans, cups, money
    if coffee_type == 1:
        water -= 250
        coffee_beans -= 16
        money += 4
        cups -= 1
    elif coffee_type == 2:
        water -= 350
        milk -= 75
        coffee_beans -= 20
        money += 7
        cups -= 1
    elif coffee_type == 3:
        water -= 200
        milk -= 100
        coffee_beans -= 12
        money += 6
        cups -= 1


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
    print(f"The coffee machine has:\n{water} of water\n{milk} of milk\n{coffee_beans} of coffee beans\n{cups} of "
          f"disposable cups\n{money} of money\n")


state()
option = input("Write action (buy, fill, take):\n> ")

if option == "buy":
    buy()
elif option == "fill":
    fill()
elif option == "take":
    take()

print()
state()