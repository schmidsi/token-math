import IToken from "./IToken";

const createToken = (symbol: string): IToken => ({
  symbol,
  decimals: 18
});

export default createToken;
