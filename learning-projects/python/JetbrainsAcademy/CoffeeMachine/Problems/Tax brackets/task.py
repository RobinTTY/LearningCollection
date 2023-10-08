income = int(input())
tax_rate = [0, 0.15, 0.25, 0.28]

if income < 15528:
    calculated_tax = income * tax_rate[0]
elif income < 42708:
    calculated_tax = income * tax_rate[1]
elif income < 132407:
    calculated_tax = income * tax_rate[2]
else:
    calculated_tax = income * tax_rate[3]

print(f"The tax for {income} is {int((calculated_tax / income) * 100)}%. That is {round(calculated_tax)} dollars!")
