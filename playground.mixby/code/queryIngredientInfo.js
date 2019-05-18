var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function queryIngredientInfo (strIngredient1) {
   var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
   var results = http.getUrl(apiUrl + arg1)
   return results
}
