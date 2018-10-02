# token-math

A small helper library to do precision safe calculations and work with tokens.

_This is heavily work in progress. But feel free to open issues/pull-request with ideas._

## Design goals

- Fully type script typed
- Reusable
- Functional & object-oriented API (flexible API)
- Use https://github.com/tc39/proposal-bigint but with a fallback
- Reuse JS-native functions like: toFixed, toNumber, ...

## Scratchpad

### Flexible API:

```typescript
const tokenA = new Token("TKNA");
const tokenB = {
  symbol: "TKNB",
  address: "0x123",
  decimals: 6
};

const quantityA1 = createQuantity(tokenA, toBigInt(2000));
const quantityA2 = new Quantity(tokenA, toBigInt(50000));

const sumOO = quantityA1.add(quantityA2);
const sumFn = add(quantityA1, quantityA2);
const sumCurry = add(quantityA1)(quantityA2);
```

## TODO

- [x] toBigInt function
- [x] Token Type: Symbol, Address, Decimals
- [x] Quantity Type: Token, Quantity in token
- [x] Price Type: BaseToken, QuoteToken, canceled down buy/sell
- [x] getPrice(quoteQuantity, baseQuantity): Price
- [x] valueIn (BaseToken \* Price or QuoteToken / Price) // Check if meaningful
- [x] add/subtract (check if same tokens)
- [ ] getPriceChange(): Number
- [ ] Folder structure: Maybe overkill with all reexports. Better: Classes as default exports (for convenience), functions with deep export
- [ ] Typedocs
- [ ] BigInt fallback

## Questions

- Make the OO interface an own package?
- Code generation?
