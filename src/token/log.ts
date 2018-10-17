import IToken from "./IToken";

const log = (token: IToken) =>
  `${token.symbol}@${token.address}(10**.${token.decimals}`;

export default log;