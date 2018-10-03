class EnsureError extends Error {
  data: any;

  constructor(message: string, context: any) {
    super(message);
    this.data = context;
  }
}

const ensure = (
  test: boolean,
  message: string = "A requirement (ensure) was not met",
  context?: any
): void => {
  if (!test) throw new EnsureError(message, context);
};

export default ensure;
