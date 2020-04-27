from bs4 import BeautifulSoup
import requests
import sys
import os


class Browser:
    def __init__(self):
        self.folder = sys.argv[1]
        self.page_history = list()
        self.relevant_tags = ['p', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    def browse(self):
        while True:
            url = input()
            if url == "exit":
                break
            elif url == "back":
                if len(self.page_history) > 1:
                    self.page_history.pop()
                    self.display_page(self.request_page(self.page_history.pop()))
            elif "." not in url:
                content = self.retrieve_saved_page(url)
                self.display_page(content)
            else:
                self.page_history.append(url)
                content = self.request_page(url)
                parsed_content = self.parse_html(content)
                self.save_page(url, parsed_content)
                self.display_page(parsed_content)



    def print_error(self):
        print("Error: couldn't parse the url you entered. Try again :)")

    def display_page(self, content):
        if content is not None:
            print(content)
        else:
            self.print_error()

    def parse_html(self, html):
        soup = BeautifulSoup(html, 'html.parser')
        body = soup.find('body')
        relevant_tags = body.find_all(self.relevant_tags)
        assembled_page = ''
        for tag in relevant_tags:
            assembled_page += f"{tag.get_text()}\n"
        return assembled_page

    def request_page(self, url):
        response = requests.get(f"https://{url}")
        if response:
            return response.content
        else:
            return None

    def save_page(self, url, content):
        file_name = self.get_filename_from_url(url)
        os.makedirs(os.path.dirname(file_name), exist_ok=True)
        with open(file_name, "w") as file:
            file.write(content)

    def retrieve_saved_page(self, url):
        file_name = self.get_filename_from_url(url)
        if not os.path.exists(file_name):
            return
        else:
            with open(file_name, "r") as file:
                return file.read()

    def get_filename_from_url(self, url):
        page_name = url.split('.')[0]
        return f"{self.folder}/{page_name}.txt"


# write webpages to files
browser = Browser()
browser.browse()
