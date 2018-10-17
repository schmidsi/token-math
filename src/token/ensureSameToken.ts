import ensure from "../utils/ensure";

import IToken from "./IToken";
import isSameToken from "./isSameToken";

const ensureSameToken = (a: IToken, b: IToken): void =>
  ensure(isSameToken(a, b), "Require same tokens", { a, b });

export default ensureSameToken;
