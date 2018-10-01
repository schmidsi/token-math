import QuantityInterface from "../Quantity/QuantityInterface";

interface PriceInterface {
  readonly base: QuantityInterface;
  readonly quote: QuantityInterface;
}

export default PriceInterface;
