import BigInteger from "../bigInteger/BigInteger";
import TokenInterface from "./TokenInterface";

const appendDecimals = (
  token: TokenInterface,
  n: number | string
): BigInteger => {
  const string = typeof n === "string" ? n : n.toString();

  const [int, givenDecimals = ""] = string.split('.')

  const padding = Array.apply(null, Array(Math.max(0, token.decimals - givenDecimals.length)))
    .map(() => 0)
    .join("");

  const decimals = `${givenDecimals}${padding}`.slice(0, token.decimals);

  return new BigInteger(`${int}${decimals}`);
};

export default appendDecimals;
