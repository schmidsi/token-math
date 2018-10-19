import TokenInterface from "./TokenInterface";

const createToken = (
  symbol: string,
  address?: string,
  decimals: number = 18
): TokenInterface => ({
  symbol,
  address,
  decimals
});

export default createToken;
