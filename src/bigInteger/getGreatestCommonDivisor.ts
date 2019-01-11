import BigInteger from "./BigInteger";
import isZero from "./isZero";
import modulo from "./modulo";
import toBI from "./toBI";

// console.log(typeof BigInt === undefined);

const getGreatestCommonDivisor = (a: BigInteger, b: BigInteger): BigInteger => {
  const bBI = toBI(b);
  const aBI = toBI(a);
  return isZero(bBI) ? aBI : getGreatestCommonDivisor(bBI, modulo(aBI, bBI));
}

export default getGreatestCommonDivisor;
