import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";
import BigInteger from "../bigInteger/BigInteger";
import { default as subtractBigInteger } from "../bigInteger/subtract";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as subtractQuantity } from "../quantity/subtract";

export type Subtract = {
  (...minuends: ConvertableBigInteger[]): BigInteger;
  (...minuends: QuantityInterface[]): QuantityInterface;
};

const subtract: Subtract = (...minuends: any[]): any => {
  if (
    isConvertableBigInteger(minuends[0]) &&
    isConvertableBigInteger(minuends[1])
  ) {
    return subtractBigInteger(...minuends);
  }

  if (isQuantity(minuends[0]) && isQuantity(minuends[1])) {
    return subtractQuantity(...minuends);
  }

  throw new TypeError(`"subtract" not implemented for ${typeof minuends[0]}`);
};

export default subtract;
