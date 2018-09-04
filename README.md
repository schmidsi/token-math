token-math
==========

A small helper library to do precision safe calculations and work with tokens.

*This is heavily work in progress. But feel free to open issues/pull-request with ideas.*

## Design goals

- Fully type script typed
- Reusable
- Functional & object-oriented API (flexible API)
- Use https://github.com/tc39/proposal-bigint but with a fallback
- Reuse JS-native functions like: toFixed, toNumber, ...

## Scratchpad

### Flexible API:

```typescript

const tokenA = new Token('TKNA');
const tokenB = {
  symbol: "TKNB",
  address: '0x123',
  decimals: 6,
};

const quantityA1 = createQuantity(tokenA, toBigInt(2000));
const quantityA2 = new Quantity(tokenA, toBigInt(50000));

const sumOO = quantityA1.add(quantityA2);
const sumFn = add(quantityA1, quantityA2);
const sumCurry = add(quantityA1)(quantityA2);

```

