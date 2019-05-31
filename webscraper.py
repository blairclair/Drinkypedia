from bs4 import BeautifulSoup
import requests
import json
import csv

drinksArr = []
url = 'https://en.wikibooks.org/wiki/Bartending/Cocktails/Glossary'
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")
linksDrinks = content.find_all('a')
for l2 in linksDrinks:
	l2.decompose()
line = content.find('dl')
info = content.find_all('dl')
for line in info:
	lineObjectOne = {
		"name": str(line.find('dt')),
		"instructions": str(line.find('dd'))
	}
	drinksArr.append(lineObjectOne)
with open('drinkData.json', 'w') as outfile:
	json.dump(drinksArr, outfile)