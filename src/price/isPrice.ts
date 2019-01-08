import isQuantity from "../quantity/isQuantity";
import PriceInterface from "./PriceInterface";

const isPrice = (input: PriceInterface): input is PriceInterface =>
  isQuantity(input.base) && isQuantity(input.quote);

export default isPrice;
