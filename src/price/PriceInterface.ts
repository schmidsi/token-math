import QuantityInterface from "../quantity/QuantityInterface";

interface PriceInterface {
  readonly base: QuantityInterface;
  readonly quote: QuantityInterface;
}

export default PriceInterface;
