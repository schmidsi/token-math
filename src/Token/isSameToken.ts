import Token from "./Token";

const isSameToken = (a: Token, b: Token) =>
  a.symbol === b.symbol && a.address === b.address && a.decimals === b.decimals;

export default isSameToken;
