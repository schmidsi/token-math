import divide from "../bigInteger/divide";

import Price from "./Price";

// TODO: Fix this, doesn't seem to work :(
const toAtomic = (price: Price): string =>
  divide(price.quote.quantity, price.base.quantity).toString()

export default toAtomic;
