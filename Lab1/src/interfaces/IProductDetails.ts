import { IProduct } from '@/interfaces/IProduct.js'
import { IMeasureUnit } from '@/interfaces/IMeasureUnit.js'
import { IMoney } from '@/interfaces/IMoney.js'

export interface IProductDetails {
  product: IProduct
  quantity: number
  measureUnit: IMeasureUnit
  pricePerUnit: IMoney
}
