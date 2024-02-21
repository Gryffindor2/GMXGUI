import requests
from bs4 import BeautifulSoup

url = 'https://manual.gromacs.org/documentation/2023/user-guide/mdp-options.html'

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    fp = open('output.txt', 'w', encoding='utf-8')
    for section in soup.find_all('section'):
        fp.write(str(section))
else:
    print('Failed to retrieve the webpage. Status code:', response.status_code)