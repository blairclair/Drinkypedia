var http = require('http')
var console = require('console')

// Takes n string arguments for ingredients, returns array.

module.exports.function = function queryByIngredients (strIngredient1) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  var results = []
  //var xhttp = new XMLHttpRequest();
  for (var i = 0; i < arguments.length; i++) {
    var tmpResults = http.getUrl(apiUrl + arguments[i])
    tmpResults = JSON.parse(tmpResults)
    console.log(tmpResults.drinks)
    if (typeof(results[0]) == 'undefined') {
      for (id in tmpResults.drinks) {
        console.log(tmpResults.drinks[id])
        results.push(tmpResults.drinks[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults.drinks) {
        console.log(apiUrl + arguments[i])
        if (results.includes(tmpResults.drinks[id])) {
          newResults.push(tmpResults.drinks[id])
        }
      }
      results = newResults;
    }
  }
  //debug
  /*for (id in results) {
    console.log(results[id])
  }*/
  console.log('Done')
  return results
}
