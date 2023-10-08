import math


class Matrix:
    def __init__(self, num_rows, num_columns, arr=None):
        if arr is None:
            arr = []
        self.num_rows = num_rows
        self.num_columns = num_columns
        self.arr = list(arr)

    def __str__(self):
        output = ""
        for row in self.arr:
            output += '\n'
            for num in row:
                output += f"{num} "
        return output

    def __add__(self, other):
        if self.num_rows != other.num_rows or self.num_columns != other.num_columns:
            return "The operation cannot be performed."
        else:
            result = Matrix(self.num_rows, self.num_columns, self.arr)
            for i in range(self.num_rows):
                for j in range(self.num_columns):
                    result.arr[i][j] += other.arr[i][j]
            return result

    def __radd__(self, other):
        return self.__add__(other)

    def __mul__(self, other):
        if type(other) == float:
            result = Matrix(self.num_rows, self.num_columns, self.arr)
            for i in range(self.num_rows):
                for j in range(self.num_columns):
                    result.arr[i][j] *= other
            return result
        if type(other) == Matrix:
            if self.num_columns != other.num_rows:
                return "The operation cannot be performed."
            result_matrix = Matrix.create_null_matrix(self.num_rows, other.num_columns)
            for i in range(result_matrix.num_rows):
                for j in range(result_matrix.num_columns):
                    temp_sum = 0
                    for n in range(self.num_columns):
                        temp_sum += self.arr[i][n] * other.arr[n][j]
                    result_matrix.arr[i][j] = temp_sum
            return result_matrix

    def __rmul__(self, other):
        return self.__mul__(other)

    @staticmethod
    def truncate(num, decimal_places):
        if decimal_places <= 0:
            math.floor(decimal_places)
        return int(num * 10 ** decimal_places) / 10 ** decimal_places

    @staticmethod
    def make_null_matrix(num_rows, num_columns):
        return [[0 for _ in range(num_columns)] for _ in range(num_rows)]

    @staticmethod
    def create_null_matrix(num_rows, num_columns):
        null_matrix = Matrix.make_null_matrix(num_rows, num_columns)
        return Matrix(num_rows, num_columns, null_matrix)

    def add_row_from_list(self, val_list):
        self.arr.append([float(x) for x in val_list.split()])

    @staticmethod
    def transpose_base(matrix, transpose):
        result_matrix = Matrix.create_null_matrix(matrix.num_rows, matrix.num_columns)
        for i in range(matrix.num_rows):
            for j in range(matrix.num_columns):
                result_matrix.arr[i][j] = transpose(i, j)

        return result_matrix

    @staticmethod
    def transpose_main_diagonal(matrix):
        def transpose_func(i, j): return matrix.arr[j][i]
        return Matrix.transpose_base(matrix, transpose_func)

    @staticmethod
    def transpose_side_diagonal(matrix):
        def transpose_func(i, j): return matrix.arr[matrix.num_rows - j - 1][matrix.num_columns - i - 1]
        return Matrix.transpose_base(matrix, transpose_func)

    @staticmethod
    def transpose_vertical_line(matrix):
        def transpose_func(i, j): return matrix.arr[i][matrix.num_columns - j - 1]
        return Matrix.transpose_base(matrix, transpose_func)

    @staticmethod
    def transpose_horizontal_line(matrix):
        def transpose_func(i, j): return matrix.arr[matrix.num_rows - i - 1][j]
        return Matrix.transpose_base(matrix, transpose_func)

    @staticmethod
    def calculate_determinant(matrix):
        if matrix.num_rows != matrix.num_columns:
            return "The operation cannot be performed."
        elif matrix.num_rows == matrix.num_columns == 1:
            return matrix.arr[0][0]
        else:
            det = 0
            cofactor_matrix = Matrix.calculate_cofactor_matrix(matrix, True)
            for i in range(matrix.num_columns):
                det += matrix.arr[0][i] * cofactor_matrix.arr[0][i]
            return det

    @staticmethod
    def calculate_cofactor_matrix(matrix, det_mode=False):
        num_rows = matrix.num_rows
        # if we calculate the determinant we only need one row of cofactors
        if det_mode:
            num_rows = 1
        null_matrix = Matrix.create_null_matrix(num_rows, matrix.num_columns)
        cofactor_matrix = Matrix(num_rows, matrix.num_columns, null_matrix.arr)
        for i in range(num_rows):
            for j in range(matrix.num_columns):
                matrix_copy = list(matrix.arr[0:i] + matrix.arr[i + 1:])  # slice off i row
                for k in range(len(matrix_copy)):
                    matrix_copy[k] = matrix_copy[k][0:j] + matrix_copy[k][j + 1:]  # slice off j column
                cofactor_matrix.arr[i][j] = (-1) ** (i + j) * Matrix.calculate_determinant(Matrix(matrix.num_rows - 1, matrix.num_columns - 1, matrix_copy))
        return cofactor_matrix

    @staticmethod
    def calculate_inverse(matrix):
        determinant = Matrix.calculate_determinant(matrix)
        if determinant == 0:
            return "This matrix doesn't have an inverse"
        return (1 / determinant) * Matrix.transpose_main_diagonal(Matrix.calculate_cofactor_matrix(matrix))


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
        print("4. Transpose matrix")
        print("5. Calculate a determinant")
        print("6. Inverse matrix")
        print("0. Exit")
        self.choice = input("Your choice: > ")

    def choose_operation(self, choice):
        if choice == '1':
            result = self.add_matrices()
        elif choice == '2':
            result = self.multiply_by_constant()
        elif choice == '3':
            result = self.multiply_matrices()
        elif choice == '4':
            result = self.transpose_matrix()
        elif choice == '5':
            result = self.calculate_determinant()
        elif choice == '6':
            result = self.calculate_inverse()
        elif choice == '0':
            self.exit_requested = True
            return
        else:
            result = "The operation cannot be performed.\n"

        self.print_result(result)

    @staticmethod
    def print_result(result):
        if type(result) is str:
            print(result)
        else:
            print("The result is:")
            print(result)
            print()

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
        return matrix_a + matrix_b

    def multiply_by_constant(self):
        matrix = self.generate_matrix_from_input()
        constant = float(input("Enter constant: > "))
        return matrix * constant

    def multiply_matrices(self):
        matrix_a = self.generate_matrix_from_input()
        matrix_b = self.generate_matrix_from_input()
        return matrix_a * matrix_b

    def transpose_matrix(self):
        print("1. Main diagonal")
        print("2. Side diagonal")
        print("3. Vertical line")
        print("4. Horizontal line")
        choice = input("Your choice: > ")
        matrix = self.generate_matrix_from_input()
        if choice == "1":
            return Matrix.transpose_main_diagonal(matrix)
        elif choice == "2":
            return Matrix.transpose_side_diagonal(matrix)
        elif choice == "3":
            return Matrix.transpose_vertical_line(matrix)
        elif choice == "4":
            return Matrix.transpose_horizontal_line(matrix)
        else:
            return "The operation cannot be performed.\n"

    def calculate_determinant(self):
        matrix = self.generate_matrix_from_input()
        return Matrix.calculate_determinant(matrix)

    def calculate_inverse(self):
        matrix = self.generate_matrix_from_input()
        return Matrix.calculate_inverse(matrix)


processor = NumericMatrixProcessor()
while not processor.exit_requested:
    processor.run()
