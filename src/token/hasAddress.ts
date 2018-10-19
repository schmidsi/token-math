import TokenInterface from "./TokenInterface";

const hasAddress = (candidate: TokenInterface) => !!candidate.address;

export default hasAddress;
