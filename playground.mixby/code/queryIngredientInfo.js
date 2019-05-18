var http = require('http')
var console = require('console')
module.exports.function = function queryIngredientInfo (strIngredient1) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
  var results = []
  //var xhttp = new XMLHttpRequest();
  for (var i = 0; i < arguments.length; i++) {
    var tmpResults = http.getUrl(apiUrl + strIngredient1)
    tmpResults = JSON.parse(tmpResults)
    console.log(tmpResults.ingredients)
    if (typeof(results[0]) == 'undefined') {
      for (id in tmpResults.ingredients) {
        console.log(tmpResults.ingredients[id])
        results.push(tmpResults.ingredients[id])
      }
    } else {
      var newResults = []
      for (id in tmpResults.ingredients) {
        console.log(apiUrl + arguments[i])
        if (results.includes(tmpResults.ingredients[id])) {
          newResults.push(tmpResults.ingredients[id])
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
