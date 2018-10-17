interface IToken {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;
}

export default IToken;
