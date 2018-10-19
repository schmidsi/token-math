import BigInteger from "../bigInteger/BigInteger";
import TokenInterface from "../token/TokenInterface";

interface QuantityInterface extends TokenInterface {
  readonly quantity: BigInteger;
}

export default QuantityInterface;
