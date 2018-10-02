import TokenInterface from "./TokenInterface";

const createToken = (symbol: string): TokenInterface => ({
  symbol,
  decimals: 18
});

export default createToken;
