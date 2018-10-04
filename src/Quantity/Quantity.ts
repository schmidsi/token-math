import Token from "token/Token";

interface Quantity extends Token {
  readonly quantity: BigInt;
}

export default Quantity;
