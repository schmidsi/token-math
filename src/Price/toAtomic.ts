import divide from "../bigInteger/divide";

import IPrice from "./IPrice";

// TODO: Fix this, doesn't seem to work :(
const toAtomic = (price: IPrice): string =>
  divide(price.quote.quantity, price.base.quantity).toString();

export default toAtomic;
