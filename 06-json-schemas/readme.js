/// <reference path="types.d.ts" />
/**
 * In this example we import type definitions from types.d.ts
 * This .ts file was generated from json-schemas
 * To generate it again execute build.sh script
 */
const json = '{"firstName":"Bob", "age":1, "color":"golden"}'

// data is a plain object without autocomplete
const data = JSON.parse(json) 

const pet = /** @type {types.PetSchema} */ (data)
// type pet. in next line to see autocomplete
