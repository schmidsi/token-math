import BigInteger from "../bigInteger/BigInteger";
import IToken from "../token/IToken";

interface IQuantity extends IToken {
  readonly quantity: BigInteger;
}

export default IQuantity;
