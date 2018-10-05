import BigInteger from "../bigInteger/BigInteger";
import Token from "../token/Token";

interface Quantity extends Token {
  readonly quantity: BigInteger;
}

export default Quantity;
