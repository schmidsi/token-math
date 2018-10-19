import TokenInterface from "./TokenInterface";

const log = (token: TokenInterface) =>
  `${token.symbol}@${token.address}(10**.${token.decimals}`;

export default log;
