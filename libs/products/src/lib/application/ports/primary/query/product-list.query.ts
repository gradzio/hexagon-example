export class ProductListQuery {
  public readonly items: string[];
  constructor(prices: number[]) {
    this.items = prices.map((price) => `$${price}`);
  }
}
