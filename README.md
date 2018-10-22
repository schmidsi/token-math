# token-math

A small helper library to do precision safe calculations and work with tokens.

_This is heavily work in progress. But feel free to open issues/pull-request with ideas._

## Design goals

- Fully type script typed
- Reusable
- Reuse JS-native functions like: toFixed, toNumber, ...

## High-level concepts

This package contains 5 top-level namespaces with associated functions:

- `address`: Contains a minimal class `Address` to achieve type-safety with Ethereum addresses.
- `bigInteger`: Helper functions to do math with big integers. Note: Integers are always rounded. So be careful with `divide`. Usually, you should not use the bigInteger functions directly, it's always more safe to use the `quantity`/`price` functions.
- `token`: The basic building block: A token consists of a `symbol` and a number of `decimals`, normally 18. Optionally, a token can also have an `Address` where its contract is deployed.
- `quantity`: A quantity is an amount of a token. This library provides some helper functions to calculate with quantities. Be aware that all these functions also check, if the tokens are the same. It does not make sense to "add" 2 MLNs and 3 ETH.
- `price`. A price consist of a base quantity and quote quantity. Note that the quantity also includes the token. A price is internally represented as a fraction instead of a float to avoid rounding errors.

## Usage

There are 3 ways to import the library in typescript:

### 1. Everything

```typescript
import * as tokenMath from "@melonproject/token-math";

const mlnToken = tokenMath.token.createToken("MLN");
```

### 2. Only needed namespaces

```typescript
import { token } from "@melonproject/token-math";

const mlnToken = token.createToken("MLN");
```

### 3. Only needed functions (Recommended)

```typescript
import { createToken } from "@melonproject/token-math/token";

const mlnToken = createToken("MLN");
```

We recommend option 3 because it makes your code more concise and you could take advantage of tree-shaking in your build process. That said, be careful with this method because some functions exist on `quantity` and `bigInteger`. Although, you shouldn't use `bigInteger` anyways, or only the constructor functions.

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
