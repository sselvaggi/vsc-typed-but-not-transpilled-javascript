/// <reference path="types.d.ts" />
/**
 * In this example we import all the type definitions from types.d.ts at once 
 * types.d.ts was generated from json-schemas into schemas directory
 * you can modify json-schemas and regenerate types.d.ts using 'npm run build'
 * sometimes It's needed to restart VSC in order to reload types.d.ts to have autocomplete
 */
const secretObject = JSON.parse('{"firstName":"Bob", "age":1, "color":"golden"}')
const pet = /** @type {types.PersonSchema) } */ ( secretObject )
// type pet. in next line to see autocomplete
