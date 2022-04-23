/**
 * @typedef {import('./Animal').default} Animal
 */
const secretObject = JSON.parse(`{ "sound": "cuak"}`) // No autocomplete here
const duck = /** @type {Animal} */ ( secretObject )
duck.sound // <- Now we have autocomplete