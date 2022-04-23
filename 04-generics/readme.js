/** @typedef {{name: string, password: T}} User */
/** @typedef { {[keyof: string]: T} } Bucket @template T */

// JSON serializacion provides objects without autocomplete  
const secretObject = JSON.parse(`{ name: 'SuperMan', password: '1234'}`)

const userBucket = /** @type { Bucket<User>} */ ({})
userBucket['secretItem'] = secretObject // <- Here we DON'T have autocomplete
userBucket['secretItem']. // <- Now we have autocomplete