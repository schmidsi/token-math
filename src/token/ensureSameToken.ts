import ensure from "../utils/ensure";

import TokenInterface from "./TokenInterface";
import isSameToken from "./isSameToken";

const ensureSameToken = (a: TokenInterface, b: TokenInterface): void =>
  ensure(isSameToken(a, b), "Require same tokens", { a, b });

export default ensureSameToken;
