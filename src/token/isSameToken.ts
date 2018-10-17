import IToken from "./IToken";

const isSameToken = (a: IToken, b: IToken) =>
  a.symbol === b.symbol && a.address === b.address && a.decimals === b.decimals;

export default isSameToken;
