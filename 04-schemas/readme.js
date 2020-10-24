/**
 * In this example we import type definitions from types.d.ts
 */
/// <reference path="types.d.ts" />
/*
 * And then we compile schemas from ./schemas directory to types.d.ts as Typescript interfaces
 * npx json2ts -i schemas/ > types.d.ts
 * 
 * The name of the namespace is 'types'
 * echo "export as namespace types;" >> types.d.ts 
 * 
 */

const pet = /** @type {types.PetSchema} */ ({})
pet.age