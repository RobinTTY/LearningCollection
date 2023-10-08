# write your code here
with open("salary.txt", "r") as salary_file, open("salary_year.txt", "w") as salary_year_file:
    for line in salary_file:
        salary_year_file.write(str(int(line) * 12) + "\n")
