class CoffeeMachine:
    def __init__(self, water, milk, coffee_beans, cups, money):
        self.water = water
        self.milk = milk
        self.coffee_beans = coffee_beans
        self.cups = cups
        self.money = money
        self.coffee_type = None

    def buy(self):
        self.coffee_type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main "
                                 "menu:\n> ")
        if self.coffee_type == "back":
            return
        else:
            coffee_type = int(self.coffee_type)

        if coffee_type == 1:
            self.try_make_coffee(250, 0, 16)
            self.money += 4
        elif coffee_type == 2:
            self.try_make_coffee(350, 75, 20)
            self.money += 7
        elif coffee_type == 3:
            self.try_make_coffee(200, 100, 12)
            self.money += 6

    def try_make_coffee(self, water_requirement, milk_requirement, beans_requirement):
        if self.cups - 1 < 0:
            self.print_status_msg("cups")
        if self.water - water_requirement < 0:
            self.print_status_msg("water")
        elif self.milk - milk_requirement < 0:
            self.print_status_msg("milk")
        elif self.coffee_beans - beans_requirement < 0:
            self.print_status_msg("coffee beans")
        else:
            self.water -= water_requirement
            self.milk -= milk_requirement
            self.coffee_beans -= beans_requirement
            self.cups -= 1
            print("I have enough resources, making you a coffee!")

    def fill(self):
        water_fill = int(input("Write how many ml of water do you want to add:\n> "))
        milk_fill = int(input("Write how many ml of milk do you want to add:\n> "))
        coffee_beans_fill = int(input("Write how many grams of coffee beans do you want to add:\n> "))
        cups_fill = int(input("Write how many disposable cups of coffee do you want to add:\n> "))
        self.water += water_fill
        self.milk += milk_fill
        self.coffee_beans += coffee_beans_fill
        self.cups += cups_fill

    def take(self):
        print(f"I gave you ${self.money}")
        self.money = 0

    def state(self):
        print(f"\nThe coffee machine has:\n{self.water} of water\n{self.milk} of milk\n{self.coffee_beans} of coffee beans\n{self.cups} of "
              f"disposable cups\n{self.money} of money\n")

    def print_status_msg(self, msg):
        print(f"Sorry, not enough {msg}!")

    def make_coffee(self):
        while True:
            option = input("Write action (buy, fill, take, remaining, exit):\n> ")
            if option == "buy":
                self.buy()
            elif option == "fill":
                self.fill()
            elif option == "take":
                self.take()
            elif option == "remaining":
                self.state()
            elif option == "exit":
                break


coffee_machine = CoffeeMachine(400, 540, 120, 9, 550)
coffee_machine.make_coffee()
