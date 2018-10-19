import TokenInterface from "./TokenInterface";

const isSameToken = (a: TokenInterface, b: TokenInterface) =>
  a.symbol === b.symbol && a.address === b.address && a.decimals === b.decimals;

export default isSameToken;
