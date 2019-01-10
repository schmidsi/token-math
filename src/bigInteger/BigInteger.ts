import JSBI from "jsbi";

/**
 * This is a super small helper class just to enable type safety
 * It stores its value as a string.
 *
 * This class is not intended to be enhanced or anything (since we are still strictly functional here)
 */
class BigInteger extends String {
  readonly value: JSBI;

  constructor(value: number | string | any) {
    const jsbi = JSBI.BigInt(value);
    super(jsbi.toString());
    this.value = jsbi;

    if (
      typeof value === "number" &&
      JSBI.greaterThan(jsbi, JSBI.BigInt(Number.MAX_SAFE_INTEGER))
    ) {
      console.warn(
        "Provided value as number bigger than Number.MAX_SAFE_INTEGER. Use strings or BigInt.",
        jsbi.toString()
      );
    }

    if (
      typeof value === "number" &&
      JSBI.lessThan(jsbi, JSBI.BigInt(Number.MIN_SAFE_INTEGER))
    ) {
      console.warn(
        "Provided value as number less than Number.MIN_SAFE_INTEGER. Use strings or BigInt.",
        jsbi.toString()
      );
    }
  }
}

export default BigInteger;
