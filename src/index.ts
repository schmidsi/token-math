/**
 * TODO:
 *
 * - [ ] toBigInt function
 * - [ ] Token Type: Symbol, Address, Decimals
 * - [ ] Quantity Type: Token, Quantity in token
 * - [ ] Price Type: BaseToken, QuoteToken, canceled down buy/sell
 * - [ ] valueIn (BaseToken * Price or QuoteToken / Price) // Check if meaningful
 * - [ ] add/subtract (check if same tokens)
 * - [ ] getPrice(quoteQuantity, baseQuantity): Price
 * - [ ] getPriceChange(): Number
 * - [ ] getFraction(quantityA, quantityB): Number
 */

type BigInt = number;
declare const BigInt: typeof Number;

const toBigInt = (num: BigInt | Number | String) => BigInt(num);
const add = (a: BigInt, b: BigInt): BigInt => a + b;

console.log(add(BigInt("1324"), BigInt("1324")));

export { add, toBigInt };
