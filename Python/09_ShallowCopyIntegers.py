# integers
list_a = [1, 2, 3, 4, 5]
list_b = list_a.copy()

list_b[3] = 10
print(list_a) # 1, 2, 3, 4, 5
print(list_b) # 1, 2, 3, 10, 5

# objects
class Number:
	def __init__(self, number):
		self.number = number
		
list_c = [Number(1), Number(2), Number(3), Number(4), Number(5)]
list_d = list_c.copy()

list_d[3].number = 10
for object in list_c:
	print(object.number, end=" ")	# 1, 2, 3, 10, 5
	
print()
for object in list_d:
	print(object.number, end=" ") 	# 1, 2, 3, 10, 5