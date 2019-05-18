var http = require('http')
var console = require('console')

// Takes n string arguments for ingredients, returns array.

module.exports.function = function queryByIngredients (arg1, arg2, ...) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  var results = []
  for (var i = 0; i < arguments.length; i++) {
    var tmpResults = http.getUrl(apiUrl + arguments[i])
    if (!results[0]) {
      for (id in tmpResults) {
        results.push(tmpResults[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults) {
        if (results.includes(tmpResults[id])) {
          newResults.push(tmpResults[id])
        }
      }
      results = newResults;
    }
  }
  //debug
  for (id in results) {
    console.log(results[id].strDrink)
  }
  return {results}
}
