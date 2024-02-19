import {
  IMeasureUnit,
  IMoney,
  IProduct,
  IProductDetails,
  ISubtractable,
  ISummable,
  IWarehouseProductDetails
} from '@/interfaces/index.js'
import { MeasureUnitPerOne } from '@/implementations/measureUnit.js'
import { isSome } from '@/lib/utils.js'

export class ProductDetails
  implements
    IProductDetails,
    ISummable<IProductDetails>,
    ISubtractable<IProductDetails>
{
  public pricePerUnit: IMoney

  constructor(
    public product: IProduct,
    public quantity: number = 1,
    public measureUnit: IMeasureUnit = new MeasureUnitPerOne(),
    pricePerUnit?: IMoney
  ) {
    if (isSome(pricePerUnit)) this.pricePerUnit = pricePerUnit
    else this.pricePerUnit = product.price
  }

  add(other: IProductDetails): void {
    this.quantity += other.quantity
  }

  subtract(other: IProductDetails): void {
    if (this.quantity < other.quantity)
      throw new RangeError('Attempted to subtract more quantity than available')

    this.quantity -= other.quantity
  }

  toString(): string {
    return `
    ProductInfo
        Name: ${this.product.name}
        Quantity: ${this.quantity}
        Unit: ${this.measureUnit.measureUnitName}
        Price per unit: ${this.pricePerUnit}
      `
  }
}

export class WarehouseProductDetails
  extends ProductDetails
  implements IWarehouseProductDetails
{
  constructor(
    product: IProduct,
    quantity: number = 0,
    measureUnit: IMeasureUnit = new MeasureUnitPerOne(),
    pricePerUnit?: IMoney,
    public lastRestockDate: Date = new Date()
  ) {
    super(product, quantity, measureUnit, pricePerUnit)
  }

  add(other: IProductDetails): void {
    super.add(other)
    this.lastRestockDate = new Date()
  }

  toString(): string {
    return `${super.toString()}  Last restock date: ${this.lastRestockDate.toISOString().split('T')[0]}
    `
  }
}
