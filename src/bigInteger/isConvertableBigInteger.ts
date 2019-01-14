import ConvertableBigInteger from "./ConvertableBigInteger";
import BigInteger from "../bigInteger/BigInteger";

const isConvertableBigInteger = (input: any): input is ConvertableBigInteger =>
  typeof input === "number" ||
  typeof input === "string" ||
  input instanceof BigInteger;

export default isConvertableBigInteger;
