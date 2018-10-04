import Token from "./Token";

const createToken = (symbol: string): Token => ({
  symbol,
  decimals: 18
});

export default createToken;
