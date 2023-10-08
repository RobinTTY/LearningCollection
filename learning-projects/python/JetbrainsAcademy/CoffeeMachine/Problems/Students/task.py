class Student:

    def __init__(self, name, last_name, birth_year):
        self.name = name
        self.last_name = last_name
        self.birth_year = birth_year
        self.id = name[0] + last_name + birth_year
        # calculate the id here


name_input = input()
last_name_input = input()
birth_year_input = input()

student = Student(name_input, last_name_input, birth_year_input)
print(student.id)