import PriceInterface from "./PriceInterface";
import QuantityInterface from "../Quantity/QuantityInterface";
import createQuantity from "../Quantity/createQuantity";
import isSameToken from "../Token/isSameToken";
import ensure from "../utils/ensure";

const valueIn = (
  price: PriceInterface,
  quantity: QuantityInterface
): QuantityInterface => {
  ensure(
    isSameToken(price.base, quantity) || isSameToken(price.quote, quantity),
    "Require price to contain token to convert",
    { price, quantity }
  );

  return isSameToken(price.base, quantity)
    ? createQuantity(
        price.quote,
        (quantity.quantity * price.quote.quantity) / price.base.quantity
      )
    : createQuantity(
        price.base,
        (quantity.quantity / price.quote.quantity) * price.base.quantity
      );
};

export default valueIn;
