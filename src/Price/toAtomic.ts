import divide from "../bigInteger/divide";

import Price from "./Price";

const toAtomic = (price: Price): string =>
  divide(price.quote.quantity, price.base.quantity).toString()

export default toAtomic;
