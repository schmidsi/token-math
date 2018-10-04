# token-math

A small helper library to do precision safe calculations and work with tokens.

_This is heavily work in progress. But feel free to open issues/pull-request with ideas._

## Design goals

- Fully type script typed
- Reusable
- Functional & object-oriented API ready (flexible API, see below)
- Use https://github.com/tc39/proposal-bigint but with a fallback
- Reuse JS-native functions like: toFixed, toNumber, ...

## TODO

- [x] toBigInt function
- [x] Token Type: Symbol, Address, Decimals
- [x] Quantity Type: Token, Quantity in token
- [x] Price Type: BaseToken, QuoteToken, canceled down buy/sell
- [x] getPrice(quoteQuantity, baseQuantity): Price
- [x] valueIn (BaseToken \* Price or QuoteToken / Price) // Check if meaningful
- [x] add/subtract (check if same tokens)
- [ ] getPriceChange(): Number
- [x] Folder structure: Maybe overkill with all reexports. Better: Classes as default exports (for convenience), functions with deep export
- [ ] Typedocs
- [ ] BigInt fallback (BigInteger)
- [ ] Quantity.toFixed
- [ ] Test ES5 Build

## Questions

- Make the OO interface an own package?
- Code generation?

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
