import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import TokenInterface from "../token/TokenInterface";

interface QuantityInterface {
  readonly token: TokenInterface;
  readonly quantity: ConvertableBigInteger;
}

export default QuantityInterface;
