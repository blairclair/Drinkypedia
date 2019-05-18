var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function queryIngredientInfo (strIngredient1) {
   var Ingredients = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + strIngredient1, { format: 'json' })
   return Ingredients
}
