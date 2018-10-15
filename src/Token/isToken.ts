import IToken from "./IToken";

/**
 * Check if a given input is a token.
 * A bit silly with typescript but helpful for javascript users
 */
const isToken = (input: IToken) => !!input.decimals && !!input.symbol;

export default isToken;
