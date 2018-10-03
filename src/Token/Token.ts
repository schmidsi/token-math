import appendDecimals from "./appendDecimals";
import TokenInterface from "./TokenInterface";
import isSameToken from "./isSameToken";
import createToken from "./createToken";

class Token implements TokenInterface {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;

  // constructor(symbol: string);
  constructor(tokenOrSymbol: TokenInterface | string) {
    const token =
      typeof tokenOrSymbol === "string"
        ? createToken(tokenOrSymbol)
        : tokenOrSymbol;

    this.symbol = token.symbol;
    this.decimals = token.decimals;
    this.address = token.address;
  }

  static createToken = createToken;

  static appendDecimals = appendDecimals;
  appendDecimals = number => appendDecimals(this, number);

  static isSameToken = isSameToken;
  isSameToken = compareToken => isSameToken(this, compareToken);
}

export default Token;
