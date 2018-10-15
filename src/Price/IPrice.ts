import IQuantity from "../quantity/IQuantity";

interface IPrice {
  readonly base: IQuantity;
  readonly quote: IQuantity;
}

export default IPrice;
