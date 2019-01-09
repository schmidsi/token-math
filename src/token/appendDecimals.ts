import BigInteger from "../bigInteger/BigInteger";
import TokenInterface from "./TokenInterface";

const appendDecimals = (
  token: TokenInterface,
  n: number | string
): BigInteger => {
  const string = typeof n === "string" ? n : n.toString();
  const int = parseInt(string).toString();
  const decimals = string.slice(int.length + 1).slice(0, token.decimals);
  const padding = Array.apply(null, Array(Math.max(0, token.decimals - decimals.length)))
    .map(() => 0)
    .join("");

  return new BigInteger(`${int}${decimals}${padding}`);
};

export default appendDecimals;
