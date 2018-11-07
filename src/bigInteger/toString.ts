import bnCall from "./bnCall";
import BigInteger from "./BigInteger";

const toString = (bi: BigInteger) => bnCall.toString("toString", bi);

export default toString;
