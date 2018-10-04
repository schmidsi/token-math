import Quantity from "quantity/Quantity";

interface Price {
  readonly base: Quantity;
  readonly quote: Quantity;
}

export default Price;
