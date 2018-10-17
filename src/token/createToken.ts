import IToken from "./IToken";

const createToken = (
  symbol: string,
  address?: string,
  decimals: number = 18
): IToken => ({
  symbol,
  address,
  decimals
});

export default createToken;
