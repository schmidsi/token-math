# token-math

A small helper library to do precision safe calculations and work with tokens.

_This is heavily work in progress. But feel free to open issues/pull-request with ideas._

## Design goals

- Fully type script typed
- Reusable
- Reuse JS-native functions like: toFixed, toNumber, ...

## Development

This repository holds a special structure to facilitate TypeScript module development. And has therefore 3 `package.json`s:

- `./package.json`: The root package which is a lerna workspace package. It should contain all devDependencies (add with `lerna add -D -W package`)
- `./src/package.json`: The actual TypeScript source. Contains dependencies and all other important fields. You should be able to `yarn link` inside this folder to link directly the TypeScript files into your consuming package without modifying tsconfig.json.
- `./dist/package.json`: The src/package.json copied over and slightly modified.

To learn more about this workflow, look at [scripts/syncPkg.ts](./scripts/syncPkg.ts).

## Flexible API

It seems to be confusing to have both styles in the same repo. But it should be straight forward to create a OO wrapper on top of the functions. Here is an example:

```typescript
import { createQuantity } from "../Quantity";

import appendDecimals from "./appendDecimals";
import Token from "./Token";
import isSameToken from "./isSameToken";
import createToken from "./createToken";

class Token implements Token {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;

  // constructor(symbol: string);
  constructor(tokenOrSymbol: Token | string) {
    const token =
      typeof tokenOrSymbol === "string"
        ? createToken(tokenOrSymbol)
        : tokenOrSymbol;

    this.symbol = token.symbol;
    this.decimals = token.decimals;
    this.address = token.address;
  }

  static createToken = createToken;

  createQuantity = number => createQuantity(this, number);

  static appendDecimals = appendDecimals;
  appendDecimals = number => appendDecimals(this, number);

  static isSameToken = isSameToken;
  isSameToken = compareToken => isSameToken(this, compareToken);
}

export default Token;
```

Or here before we removed the OO API from this repo: https://github.com/melonproject/token-math/tree/before-ooapi-remove
