/**
 * TODO:
 *
 * - [x] toBigInt function
 * - [x] Token Type: Symbol, Address, Decimals
 * - [x] Quantity Type: Token, Quantity in token
 * - [x] Price Type: BaseToken, QuoteToken, canceled down buy/sell
 * - [x] getPrice(quoteQuantity, baseQuantity): Price
 * - [x] valueIn (BaseToken * Price or QuoteToken / Price) // Check if meaningful
 * - [x] add/subtract (check if same tokens)
 * - [ ] getPriceChange(): Number
 */

type BigInt = number;
declare const BigInt: typeof Number;

export interface Token {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;
}

export interface Quantity extends Token {
  readonly quantity: BigInt;
}

export interface Price {
  readonly base: Quantity;
  readonly quote: Quantity;
}

class RequireError extends Error {
  data: any;

  constructor(message: string, context: any) {
    super(message);
    this.data = context;
    Object.setPrototypeOf(this, RequireError.prototype);
  }
}

export const getGreatestCommonDivisor = (a: BigInt, b: BigInt): BigInt =>
  b === toBigInt(0) ? a : getGreatestCommonDivisor(b, a % b);

export const require = (
  test: boolean,
  message: string = "A requirement was not met",
  context?: any
): void => {
  if (!test) throw new RequireError(message, context);
};

export const isSameToken = (a: Token, b: Token) =>
  a.symbol === b.symbol && a.address === b.address && a.decimals === b.decimals;

export const requireSameToken = (a: Token, b: Token): void =>
  require(isSameToken(a, b), "Require same tokens", { a, b });

export const createQuantity = (token: Token, quantity: BigInt): Quantity => ({
  ...token,
  quantity
});

export const toBigInt = (num: BigInt | Number | String) => BigInt(num);

export const add = (a: Quantity, b: Quantity): Quantity => {
  requireSameToken(a, b);

  return createQuantity(a, a.quantity + b.quantity);
};

export const subtract = (a: Quantity, b: Quantity): Quantity => {
  requireSameToken(a, b);

  return createQuantity(a, a.quantity - b.quantity);
};

export const getPrice = (base: Quantity, quote: Quantity): Price => {
  const gcd = getGreatestCommonDivisor(base.quantity, quote.quantity);

  return {
    base: createQuantity(base, base.quantity / gcd),
    quote: createQuantity(quote, quote.quantity / gcd)
  };
};

export const displayPrice = (price: Price, decimals: number = 6): string =>
  (
    (parseFloat(price.quote.quantity.toString()) /
      parseFloat(price.base.quantity.toString())) *
    10 ** (price.base.decimals - price.quote.decimals)
  ).toFixed(decimals);

// valueIn (BaseToken * Price or QuoteToken / Price) // Check if meaningful
export const valueIn = (price: Price, quantity: Quantity): Quantity => {
  require(isSameToken(price.base, quantity) ||
    isSameToken(
      price.quote,
      quantity
    ), "Require price to contain token to convert", { price, quantity });

  return isSameToken(price.base, quantity)
    ? createQuantity(
        price.quote,
        (quantity.quantity * price.quote.quantity) / price.base.quantity
      )
    : createQuantity(
        price.base,
        (quantity.quantity / price.quote.quantity) * price.base.quantity
      );
};
