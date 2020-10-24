// Types definitions help to structure the code giving better autocomplete in code editors.

// Everytime you assign a type to a variable you must be sure any possible assigned value will fit this type
// The best part is we can use existent Typescript files to import type definitions

// Using JSDoc + Visual Studio Code to take advantaje of Typescript without compilation.
// JSDoc definitions must be inside document comments: 
/** */
/**
 * @typedef {import('./Zoo').default} Animal
 * @typedef {import('./Zoo').Plant} Plant
 */

const duck = /** @type {Animal} */ ( JSON.parse(`{ "sound": "cuak"}`) )
duck.sound

const tree = /** @type {Plant} */ ( JSON.parse(`{ "fragance": "sweet"}`) )
tree.fragance
