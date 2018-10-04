interface Token {
  readonly symbol: string;
  readonly address?: string;
  readonly decimals: number;
}

export default Token;
