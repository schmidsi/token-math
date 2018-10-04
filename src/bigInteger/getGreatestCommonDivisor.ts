import toBigInt from "./toBigInt";

const getGreatestCommonDivisor = (a: BigInt, b: BigInt): BigInt =>
  b === toBigInt(0) ? a : getGreatestCommonDivisor(b, a % b);

export default getGreatestCommonDivisor;
