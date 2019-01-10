import multiply from "../bigInteger/multiply";
import divide from "../bigInteger/divide";
import PriceInterface from "./PriceInterface";
import QuantityInterface from "../quantity/QuantityInterface";
import createQuantity from "../quantity/createQuantity";
import isEqual from "../token/isEqual";
import ensure from "../utils/ensure";
import { isZero } from "../quantity";

const valueIn = (
  price: PriceInterface,
  quantity: QuantityInterface
): QuantityInterface => {
  ensure(
    isEqual(price.base.token, quantity.token) ||
      isEqual(price.quote.token, quantity.token),
    "Require price to contain token to convert",
    { price, quantity }
  );

  if (isZero(price.quote) || isZero(price.base) || isZero(quantity)) {
    return isEqual(price.base.token, quantity.token)
      ? createQuantity(price.quote.token, 0)
      : createQuantity(price.base.token, 0);
  }

  return isEqual(price.base.token, quantity.token)
    ? createQuantity(
        price.quote.token,
        divide(
          multiply(quantity.quantity, price.quote.quantity),
          price.base.quantity
        )
      )
    : createQuantity(
        price.base.token,
        multiply(
          divide(quantity.quantity, price.quote.quantity),
          price.base.quantity
        )
      );
};

export default valueIn;
