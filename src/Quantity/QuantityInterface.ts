import TokenInterface from "../Token/TokenInterface";

interface QuantityInterface extends TokenInterface {
  readonly quantity: BigInt;
}

export default QuantityInterface;
