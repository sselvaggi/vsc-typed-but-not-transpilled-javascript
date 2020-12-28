/// <reference path="types.d.ts" />
// We can use generics from .ts files
// but we have to define the parameters using import
/**
 * @typedef { import('./types').Bucket<types.User> } UserBucket
 */

const bucket = {}
bucket["A"] = { name: 'SuperMan', password: '1234'}
bucket["A"] // <- this returns the same object but we don't have autocomple 

const userBucket = {}
userBucket["A"] = { name: 'SuperMan', password: '1234'}
userBucket["A"].name // <- Now we have autocomplete
