/**
 * TODO:
 *
 * - [x] toBigInt function
 * - [x] Token Type: Symbol, Address, Decimals
 * - [x] Quantity Type: Token, Quantity in token
 * - [x] Price Type: BaseToken, QuoteToken, canceled down buy/sell
 * - [ ] valueIn (BaseToken * Price or QuoteToken / Price) // Check if meaningful
 * - [ ] add/subtract (check if same tokens)
 * - [ ] getPrice(quoteQuantity, baseQuantity): Price
 * - [ ] getPriceChange(): Number
 * - [ ] getFraction(quantityA, quantityB): Number
 */

type BigInt = number;
declare const BigInt: typeof Number;

export interface Token {
  readonly symbol: string;
  readonly address: string;
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

  return {
    ...a,
    quantity: a.quantity + b.quantity
  };
};

export const subtract = (a: Quantity, b: Quantity): Quantity => {
  requireSameToken(a, b);

  return {
    ...a,
    quantity: a.quantity - b.quantity
  };
};
