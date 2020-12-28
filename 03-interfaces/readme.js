// We can reference type definitios from Typescript files in the same way
/**
 * @typedef {import('./Zoo').default} Animal
 * @typedef {import('./Zoo').Plant} Plant
 */

const duck = /** @type {Animal} */ ( JSON.parse(`{ "sound": "cuak"}`) )
duck.sound // <- Now we have autocomplete

const tree = /** @type {Plant} */ ( JSON.parse(`{ "fragance": "sweet"}`) )
tree.fragance // <- Now we have autocomplete

console.log(`duck: ${duck.sound}`)
