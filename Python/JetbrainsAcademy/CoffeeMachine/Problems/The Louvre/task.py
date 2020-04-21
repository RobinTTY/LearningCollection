class Painting:
    museum = "Louvre"

    def __init__(self, title, painter, creation_year):
        self.title = title
        self.painter = painter
        self.creation_year = creation_year


input_title = input()
input_painter = input()
input_creation_year = input()

instance = Painting(input_title, input_painter, input_creation_year)
print(f'"{instance.title}" by {instance.painter} ({instance.creation_year}) hangs in the {instance.museum}.')
