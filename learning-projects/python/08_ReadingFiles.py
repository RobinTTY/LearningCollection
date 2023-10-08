seasons_file = open('08_ReadingFiles.txt', 'r', encoding='utf-8')
 
seasons = seasons_file.readlines()
favorite_season = seasons[2]
print(favorite_season)				# autumn
 
seasons_file.close()