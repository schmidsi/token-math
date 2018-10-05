import multiply from "../bigInteger/multiply";
import divide from "../bigInteger/divide";
import Price from "./Price";
import Quantity from "quantity/Quantity";
import createQuantity from "../Quantity/createQuantity";
import isSameToken from "../Token/isSameToken";
import ensure from "../utils/ensure";

const valueIn = (price: Price, quantity: Quantity): Quantity => {
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
