import { IMoney, IProductPrice, IProduct } from '@/interfaces/index.js'

export class Product implements IProduct {
  constructor(
    public name: string,
    public price: IProductPrice
  ) {}

  decreasePrice(byPrice: IMoney): void {
    this.price.subtract(byPrice)
  }

  increasePrice(byPrice: IMoney): void {
    this.price.add(byPrice)
  }

  toString(): string {
    return `
    Product
       Name: ${this.name}
       Price: ${this.price}
    `
  }
}
