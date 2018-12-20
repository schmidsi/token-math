import TokenInterface from "./TokenInterface";

const isSameToken = (a: TokenInterface, b: TokenInterface) =>
  a.symbol === b.symbol &&
  (a.address && a.address.toLowerCase()) ===
    (b.address && b.address.toLowerCase()) &&
  a.decimals === b.decimals;
export default isSameToken;
