# VSC Typed (but not transpilled) Javascript

Thanks to VSC we can use almost every Typescript feature directly inside Javascript files thanks to JSDoc annotations

[Update 2022: Microsoft proposal at ECMAScript to implement typing on runtime using annotations ](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)

Types definitions help to structure the code giving better autocomplete in code editors like VSC.

There're 2 alternatives to have full typescript support at .js files

- Adding this comment at the top of the .js file:

```
// @ts-check
```

OR

- Creating **jsconfig.json** with the same info as **tsconfig.json** in the root of the project

```json
{
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "checkJs": true,
    "module": "ES2022",
    "target": "ES6",
    "typeRoots": ["src/types"],
    "lib": ["DOM"],
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "jsx": "preserve"
  },
  "exclude": ["node_modules", "./src/_ui"]
}
```

We can import type definitions from .ts files (only types and interfaces), even from 3rd party libraries inside our project.

## Import types

```javascript
/**
 * @typedef {import('./filePath').default} MyType
 */
```

## Setting variable type

```javascript
const x = /** @type {MyType} */ (value);
```

IMPORTANT don't forget to souround value inside parenthesis around value.

## Samples

### 01-functions

[![01_Functions](01-functions/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/01-functions)

### 02-imports

[![02_imports](02-imports/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/02-imports)

### 03-namespaces

[![03_Namespaces](03-namespaces/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/03-namespaces)

### 04-generics

[![04_Generics](04-generics/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/04-generics)

### 05-Observers

[![05_Observers](05-observers/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/05-observers)

### 06-schemas

[![06_Schemas](06-schemas/img.png)](https://github.com/sselvaggi/vsc-typed-but-not-transpilled-javascript/tree/main/06-schemas)
