import ensure from "../utils/ensure";

import TokenInterface from "./TokenInterface";
import isEqual from "./isEqual";

const ensureSameToken = (a: TokenInterface, b: TokenInterface): void =>
  ensure(isEqual(a, b), "Require same tokens", { a, b });

export default ensureSameToken;
