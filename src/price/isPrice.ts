import isQuantity from "../quantity/isQuantity";
import PriceInterface from "./PriceInterface";

const isPrice = (input: any): input is PriceInterface =>
  input.base && input.quote && isQuantity(input.base) && isQuantity(input.quote);

export default isPrice;
