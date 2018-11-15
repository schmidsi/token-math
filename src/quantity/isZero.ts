import QuantityInterface from "./QuantityInterface";
import { default as isZeroBI } from "../bigInteger/isZero";

const isZero = (q: QuantityInterface) => isZeroBI(q.quantity);

export default isZero;
