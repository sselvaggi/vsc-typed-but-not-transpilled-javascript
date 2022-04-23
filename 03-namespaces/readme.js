/// <reference path="types.d.ts" />
/**
 * There're many type definitions inside types.d.ts 
 * grouped by a namespace called types
 * We import all the type definitions at once 
 * (It must be done at the very 1st line of this file)
 */
const secretObject = JSON.parse('{"firstName":"Bob", "age":1, "color":"golden"}')
secretObject // This object hasn't autocomplete
const pet = /** @type {types.Pet) } */ ( secretObject )
// type pet. in next line to see autocomplete
