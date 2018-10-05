/**
 * This is a super small helper class just to enable type safety
 * It stores its value as a string.
 *
 * This class is not intended to be enhanced or anything (since we are still strictly functional here)
 */
class BigInteger {
  readonly value: string;

  constructor(value: string | number | BigInteger) {
    if (value instanceof BigInteger) {
      this.value = value.value;
    } else if (typeof value === "number") {
      if (value.toString() !== value.toFixed()) {
        throw new TypeError(`Value is not an integer: ${value}`);
      }

      this.value = parseInt(value.toString(), 10).toString();
    } else if (value.indexOf("0x") === 0) {
      this.value = parseInt(value, 16).toString();
    } else {
      if (parseInt(value) !== parseFloat(value)) {
        throw new TypeError(`Value is not an integer: ${value}`);
      }

      this.value = parseInt(value, 10).toString();
    }
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return this.value;
  }
}

export default BigInteger;
