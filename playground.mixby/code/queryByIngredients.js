var http = require('http')
var console = require('console')

// Takes n string arguments for ingredients, returns array.

module.exports.function = function queryByIngredients (strIngredient1) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  var results = []
  //var xhttp = new XMLHttpRequest();
  for (var i = 0; i < arguments[0].length; i++) {
    var tmpResults = http.getUrl(apiUrl + arguments[0][i])
    tmpResults = JSON.parse(tmpResults)
    console.log(apiUrl + arguments[0][i])
    //console.log(tmpResults.drinks)
    if (typeof(results[0]) == 'undefined') {
      for (id in tmpResults.drinks) {
        console.log(tmpResults.drinks[id])
        results.push(tmpResults.drinks[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults.drinks) {
        var found = 0
        console.log(apiUrl + arguments[0][i])
        for (var i = 0; i < results.length; i++) {
          console.log(results[i].strDrink)
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
  }
  console.log('Done')
  return results
}
