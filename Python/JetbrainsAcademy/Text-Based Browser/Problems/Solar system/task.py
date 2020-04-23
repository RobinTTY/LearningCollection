# create the planets.txt
planets = ["Mercury\n", "Venus\n", "Earth\n", "Mars\n", "Jupiter\n", "Saturn\n", "Uranus\n", "Neptune\n"]
file = open("planets.txt", "w+")
file.writelines(planets)
file.close()
