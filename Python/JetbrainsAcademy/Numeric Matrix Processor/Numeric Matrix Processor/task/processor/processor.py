class Matrix:
    def __init__(self, num_rows, num_columns, arr=None):
        if arr is None:
            arr = []
        self.num_rows = num_rows
        self.num_columns = num_columns
        self.arr = arr

    def add_row_from_list(self, val_list):
        self.arr.append([float(x) for x in val_list.split()])

    def print_pretty(self):
        for row in self.arr:
            output = ""
            for num in row:
                output += str(num) + ' '
            print(output)

    @staticmethod
    def add_matrices(matrix_a, matrix_b):
        if matrix_a.num_rows != matrix_b.num_rows or matrix_a.num_columns != matrix_b.num_columns:
            return "The operation cannot be performed."
        else:
            result_matrix = Matrix(matrix_a.num_rows, matrix_a.num_columns, matrix_a.arr)
            for i in range(result_matrix.num_rows):
                for j in range(result_matrix.num_columns):
                    result_matrix.arr[i][j] += matrix_b.arr[i][j]

            return result_matrix

    @staticmethod
    def multiply_matrix_by_constant(constant, matrix):
        result_matrix = Matrix(matrix.num_rows, matrix.num_columns, matrix.arr)
        for i in range(matrix.num_rows):
            for j in range(matrix.num_columns):
                result_matrix.arr[i][j] *= constant

        return result_matrix

    @staticmethod
    def multiply_matrices(matrix_a, matrix_b):
        if matrix_a.num_columns != matrix_b.num_rows:
            return "The operation cannot be performed."
        null_matrix = Matrix.make_null_matrix(matrix_a.num_rows, matrix_b.num_columns)
        result_matrix = Matrix(matrix_a.num_rows, matrix_b.num_columns, null_matrix)
        for i in range(result_matrix.num_rows):
            for j in range(result_matrix.num_columns):
                temp_sum = 0
                for n in range(matrix_a.num_columns):
                    temp_sum += matrix_a.arr[i][n] * matrix_b.arr[n][j]
                result_matrix.arr[i][j] = temp_sum

        return result_matrix

    @staticmethod
    def make_null_matrix(num_rows, num_columns):
        return [[0 for _ in range(num_columns)] for _ in range(num_rows)]


class NumericMatrixProcessor:
    def __init__(self):
        self.choice = None
        self.exit_requested = False

    def run(self):
        self.print_menu()
        self.choose_operation(self.choice)

    def print_menu(self):
        print("1. Add matrices")
        print("2. Multiply matrix by a constant")
        print("3. Multiply matrices")
        print("0. Exit")
        self.choice = input("Your choice: > ")

    def choose_operation(self, choice):
        if choice == '1':
            result = self.add_matrices()
        elif choice == '2':
            result = self.multiply_by_constant()
        elif choice == '3':
            result = self.multiply_matrices()
        elif choice == '0':
            self.exit_requested = True
            return
        else:
            result = "The operation cannot be performed.\n"

        self.print_result(result)

    def print_result(self, result):
        if type(result) is str:
            print(result)
        else:
            print("The result is:")
            result.print_pretty()

    @staticmethod
    def generate_matrix_from_input():
        rows, columns = [int(x) for x in input("Enter size of matrix: > ").split()]
        matrix = Matrix(rows, columns)

        print("Enter matrix:")
        for row in range(rows):
            matrix.add_row_from_list(input("> "))

        return matrix

    def add_matrices(self):
        matrix_a = self.generate_matrix_from_input()
        matrix_b = self.generate_matrix_from_input()
        return Matrix.add_matrices(matrix_a, matrix_b)

    def multiply_by_constant(self):
        matrix = self.generate_matrix_from_input()
        constant = float(input("Enter constant: > "))
        return Matrix.multiply_matrix_by_constant(constant, matrix)

    def multiply_matrices(self):
        matrix_a = self.generate_matrix_from_input()
        matrix_b = self.generate_matrix_from_input()
        return Matrix.multiply_matrices(matrix_a, matrix_b)


processor = NumericMatrixProcessor()
while not processor.exit_requested:
    processor.run()
