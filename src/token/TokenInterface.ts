interface TokenInterface {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;
  readonly name?: string;
  [key: string]: any;
}

export default TokenInterface;
