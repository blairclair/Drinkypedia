var console = require('console')
var http = require('http')

module.exports.function = function findSpecificDrinkInfo (Drink) {
  var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  var results = []
  var tmpResults = http.getUrl(encodeURI(url + Drink.strDrink))
    tmpResults = JSON.parse(tmpResults)
    console.log(tmpResults)
    if (typeof(results[0]) == 'undefined') {
      for (id in tmpResults.drinks) {
        results.push(tmpResults.drinks[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults.drinks) {
        var found = 0
        for (var i = 0; i < results.length; i++) {
          if (results[i].strDrink == tmpResults.drinks[id].strDrink) {
            found += 1
          }
        }
        if (found) {
          newResults.push(tmpResults.drinks[id])
        }
      }
      results = newResults;
    }
    
  return results
}
