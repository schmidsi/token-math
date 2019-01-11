import TokenInterface from "./TokenInterface";

const isToken = (input: any): input is TokenInterface =>
  !!input.decimals && !!input.symbol;

export default isToken;
