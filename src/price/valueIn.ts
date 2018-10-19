import multiply from "../bigInteger/multiply";
import divide from "../bigInteger/divide";
import PriceInterface from "./PriceInterface";
import QuantityInterface from "../quantity/QuantityInterface";
import createQuantity from "../quantity/createQuantity";
import isSameToken from "../token/isSameToken";
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
        divide(
          multiply(quantity.quantity, price.quote.quantity),
          price.base.quantity
        )
      )
    : createQuantity(
        price.base,
        multiply(
          divide(quantity.quantity, price.quote.quantity),
          price.base.quantity
        )
      );
};

export default valueIn;
