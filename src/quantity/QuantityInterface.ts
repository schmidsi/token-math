import BigInteger from "../bigInteger/BigInteger";
import TokenInterface from "../token/TokenInterface";

interface QuantityInterface {
  readonly token: TokenInterface;
  readonly quantity: BigInteger;
}

export default QuantityInterface;
