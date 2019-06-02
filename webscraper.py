from bs4 import BeautifulSoup
import requests
import json
import csv

numPage = 11000

while (numPage < 11028):
	drinksArr = []
	url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + str(numPage)
	response = requests.get(url, timeout=5)
	content = BeautifulSoup(response.content, "html.parser")
	for line in content:
		newContent = {
			"drinks": line
		}
	drinksArr.append(newContent)
	with open('drinkData.json', 'a') as outfile:
		json.dump(drinksArr, outfile)
	numPage += 1
