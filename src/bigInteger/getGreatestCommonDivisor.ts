import BigInteger from "./BigInteger";
import isZero from "./isZero";
import modulo from "./modulo";

// console.log(typeof BigInt === undefined);

const getGreatestCommonDivisor = (a: BigInteger, b: BigInteger): BigInteger =>
  isZero(b) ? a : getGreatestCommonDivisor(b, modulo(a, b));

export default getGreatestCommonDivisor;
