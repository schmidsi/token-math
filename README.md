# token-math

A small helper library to do precision safe calculations and work with tokens.

_This is heavily work in progress. But feel free to open issues/pull-request with ideas._

## Design goals

- Fully type script typed
- Reusable
- Functional & object-oriented API (flexible API)
- Use https://github.com/tc39/proposal-bigint but with a fallback
- Reuse JS-native functions like: toFixed, toNumber, ...

## Flexible API

You can use all the functionality either in object-oriented style or in functional style.

- [objectOrientedAPI.test.ts](./src/objectOrientedAPI.test.ts).

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

## Questions

- Make the OO interface an own package?
- Code generation?
