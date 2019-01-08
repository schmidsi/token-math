import TokenInterface from "./TokenInterface";

const isToken = (input: TokenInterface): input is TokenInterface =>
  !!input.decimals && !!input.symbol;

export default isToken;
