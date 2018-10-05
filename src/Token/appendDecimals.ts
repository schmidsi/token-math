import BigInteger from "../bigInteger/BigInteger";
import Token from "./Token";

const appendDecimals = (token: Token, n: number): BigInteger => {
  const string = n.toString();
  const int = parseInt(string).toString();
  const decimals = string.slice(int.length + 1);
  const padding = Array.apply(null, Array(token.decimals - decimals.length))
    .map(() => 0)
    .join("");

  return new BigInteger(`${int}${decimals}${padding}`);
};

export default appendDecimals;
