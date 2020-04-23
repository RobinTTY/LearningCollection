import sys
import os

nytimes_com = '''
This New Liquid Is Magnetic, and Mesmerizing

Scientists have created “soft” magnets that can flow 
and change shape, and that could be a boon to medicine 
and robotics. (Source: New York Times)


Most Wikipedia Profiles Are of Men. This Scientist Is Changing That.

Jessica Wade has added nearly 700 Wikipedia biographies for
 important female and minority scientists in less than two 
 years.

'''

bloomberg_com = '''
The Space Race: From Apollo 11 to Elon Musk

It's 50 years since the world was gripped by historic images
 of Apollo 11, and Neil Armstrong -- the first man to walk 
 on the moon. It was the height of the Cold War, and the charts
 were filled with David Bowie's Space Oddity, and Creedence's 
 Bad Moon Rising. The world is a very different place than 
 it was 5 decades ago. But how has the space race changed since
 the summer of '69? (Source: Bloomberg)


Twitter CEO Jack Dorsey Gives Talk at Apple Headquarters

Twitter and Square Chief Executive Officer Jack Dorsey 
 addressed Apple Inc. employees at the iPhone maker’s headquarters
 Tuesday, a signal of the strong ties between the Silicon Valley giants.
'''


class Browser:
    def __init__(self):
        self.saved_pages = {}
        self.folder = sys.argv[1]

    def browse(self):
        while True:
            url = input()
            if url == "exit":
                break
            elif '.' not in url:
                saved_page = self.lookup_saved_page(url)
                if saved_page is None:
                    self.print_error()
                else:
                    self.display_page(saved_page)
            elif url in webpages:
                stripped_url = url.split(".")[0]
                self.save_page(stripped_url, webpages[url])
                self.display_page(stripped_url)
            else:
                self.print_error()

    def print_error(self):
        print("Error: couldn't parse the url you entered. Try again :)")

    def display_page(self, url):
        print(self.saved_pages[url])

    def save_page(self, page_name, page_content):
        self.saved_pages[page_name] = page_content
        file_name = f"{self.folder}/{page_name}.txt"
        os.makedirs(os.path.dirname(file_name), exist_ok=True)
        with open(file_name, "w") as file:
            file.write(page_content)

    def lookup_saved_page(self, page_name):
        if page_name in self.saved_pages:
            return page_name
        else:
            return None


# write webpages to files
webpages = {"nytimes.com": nytimes_com, "bloomberg.com": bloomberg_com}
browser = Browser()
browser.browse()
