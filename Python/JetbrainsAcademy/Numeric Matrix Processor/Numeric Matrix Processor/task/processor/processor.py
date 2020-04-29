class Matrix:
    def __init__(self, num_rows, num_columns, arr=None):
        if arr is None:
            arr = []
        self.num_rows = num_rows
        self.num_columns = num_columns
        self.arr = arr

    def add_row_from_list(self, val_list):
        self.arr.append([int(x) for x in val_list.split()])

    def print_pretty(self):
        for row in self.arr:
            output = ""
            for num in row:
                output += str(num) + ' '
            print(output)


class NumericMatrixProcessor:
    @staticmethod
    def add_matrices(matrix_a, matrix_b):
        if matrix_a.num_rows != matrix_b.num_rows or matrix_a.num_columns != matrix_b.num_columns:
            return "ERROR"
        else:
            result_matrix = Matrix(matrix_a.num_rows, matrix_a.num_columns, matrix_a.arr)
            for i in range(matrix_a.num_rows):
                for j in range(matrix_a.num_columns):
                    result_matrix.arr[i][j] += matrix_b.arr[i][j]

            return result_matrix


def generate_matrix_from_input():
    rows, columns = [int(x) for x in input().split()]
    matrix = Matrix(rows, columns)

    for row in range(rows):
        matrix.add_row_from_list(input())

    return matrix


A = generate_matrix_from_input()
B = generate_matrix_from_input()

result = NumericMatrixProcessor.add_matrices(A, B)
if type(result) is str:
    print(result)
else:
    result.print_pretty()
