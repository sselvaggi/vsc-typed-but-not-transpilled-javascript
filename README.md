# JSDoc + Typescript

Types definitions help to structure the code giving better autocomplete in code editors like VSC. 

We don't need to compile or rename file extensions.

We can import type definitions from .ts files, even from 3rd party libraries inside our project.

It never affects Javascript execution. You are responsible to make validations in runtime

## Tutorial

Dowload this project and read each readme.js files inside every subfolder.
https://codesandbox.io/s/suspicious-cartwright-ln8ts?file=/README.md

## Troubleshooting

### It works only inside comment blocks: 

```javascript
/** like this */

/** 
 * like this 
 */

/* not like this */

// not like this 
```

### Import types

```javascript
/** 
 * @typedef {import('./filePath').default} MyType
 */
```

### Casting javascript value

```javascript
const x = /** @type {MyType} */ (value)
```

IMPORTANT don't forget to souround value inside parenthesis.
