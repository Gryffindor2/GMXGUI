import requests
import json
from bs4 import BeautifulSoup

url = 'https://manual.gromacs.org/documentation/2023/user-guide/mdp-options.html'
output_file = open('./src/mdpOptions.js', 'w')

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    mdpTemplete = []
    mainSection = soup.section.section
    for section in mainSection.find_all('section'):
        sectionTemplate = {}

        sectionName = section.h3.text[:-1]
        sectionTemplate['sectionName'] = sectionName.strip()
        sectionTemplate['sectionData'] = []

        for option in section.find_all('dl', recursive=False):
            optionTemplate = {}

            optionName = option.dt.text[:-1]
            optionTemplate['name'] = optionName.strip()

            optionDescription = option.dd
            optionDescriptionText = ""
            for p in optionDescription.find_all('p', recursive=False):
                optionDescriptionText = p.text.strip()
            
            candidate = []
            for choose in optionDescription.find_all('dl'):
                chooseName = choose.dt.text[:-1]
                candidate.append(chooseName.strip())
            candidate.append("")
            optionTemplate['candidate'] = candidate
            optionDescriptionText = optionDescriptionText.replace('\n', ' ').strip()
                


            bracket_start = optionDescriptionText.find('(')
            bracket_end = optionDescriptionText.find(')')
            if(bracket_start != 0):
                defaultValue = ''
                period_index = optionDescriptionText.find('.')
                if optionDescriptionText != "":
                    if period_index != -1:
                        first_sentence = optionDescriptionText[:period_index + 1]
                    else:
                        first_sentence = optionDescriptionText + '.'
                else:
                    first_sentence = ''
            else:
                defaultValue = optionDescriptionText[bracket_start + 1:bracket_end]
                period_index = optionDescriptionText.find('.', bracket_end)
                if optionDescriptionText != "":
                    if period_index != -1:
                        first_sentence = optionDescriptionText[bracket_end + 1:period_index + 1]
                    else:
                        first_sentence = optionDescriptionText[bracket_end + 1:].strip() + '.'

                else:
                    first_sentence = ''

            optionTemplate['defaultValue'] = defaultValue
            if first_sentence == ".":
                first_sentence = ""
            optionTemplate['comment'] = first_sentence

            
            sectionTemplate['sectionData'].append(optionTemplate)
        if(sectionTemplate['sectionName'] != 'Removed features' and sectionTemplate['sectionName'] != 'User defined thingies'):
            mdpTemplete.append(sectionTemplate)
    output_file.write("var mdpOptions = ")
    output_file.write(json.dumps(mdpTemplete, indent=4, ensure_ascii=False))
    output_file.write("\nexport default mdpOptions;")
else:
    print('Failed to retrieve the webpage. Status code:', response.status_code)