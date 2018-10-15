import IToken from "./IToken";

const hasAddress = (candidate: IToken) => !!candidate.address;

export default hasAddress;
