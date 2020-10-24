/**
Namespace are useful to import many type definitions at once from .d.ts files
It could contain: interfaces, union types and declare vars but NOT classes
There are 2 ways to import a namespace:

    1) The first way is: */
/// <reference path="types.d.ts" />
/**
    It must be placed before any line of code to work
    In VSC if the target .d.ts file is renamed, the reference will NOT be UPDATED
*/
const argentina = /** @type {Country.City} */ ( {} )
argentina.name

/**
    2) The other way is:
    @typedef {import('./types2')} Band 
*/
const elvis = /** @type {Band.Elvis} */ ( {} )
elvis.sing()
const beatle = /** @type {Band.Lenon} */ ( {} ) 
beatle.sing()