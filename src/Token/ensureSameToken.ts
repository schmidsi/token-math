import ensure from "../utils/ensure";

import Token from "./Token";
import isSameToken from "./isSameToken";

const ensureSameToken = (a: Token, b: Token): void =>
  ensure(isSameToken(a, b), "Require same tokens", { a, b });

export default ensureSameToken;
