import { IProductPrice } from '@/interfaces/IProductPrice.js'
import { IMoney } from '@/interfaces/IMoney.js'

export interface IProduct {
  name: string
  price: IProductPrice

  decreasePrice(byPrice: IMoney): void

  increasePrice(byPrice: IMoney): void
}
