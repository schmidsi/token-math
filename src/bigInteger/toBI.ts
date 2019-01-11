import BigInteger from "./BigInteger";

const toBI = value =>
  value.hasOwnProperty('value') && Array.isArray(value.value) ? value : new BigInteger(value);

export default toBI;
