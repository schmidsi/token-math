import TokenInterface from "./TokenInterface";

const display = (token: TokenInterface) =>
  `${token.symbol}@${token.address}(10**.${token.decimals}`;

export default display;
