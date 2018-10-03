import TokenInterface from "./TokenInterface";

const appendDecimals = (token: TokenInterface, n: number): BigInt => {
  const string = n.toString();
  const int = parseInt(string).toString();
  const decimals = string.slice(int.length + 1);
  const padding = Array(token.decimals - decimals.length)
    .fill(0)
    .join("");

  return BigInt(`${int}${decimals}${padding}`);
};

export default appendDecimals;
