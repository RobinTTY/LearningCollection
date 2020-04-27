import requests


def check_success(url):
    response = requests.get(url)
    if response:
        return "Success"
    return "Fail"
