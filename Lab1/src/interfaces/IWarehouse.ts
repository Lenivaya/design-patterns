import { IWarehouseProductDetails } from '@/interfaces/IWarehouseProductDetails.js'
import { IProductDetails } from '@/interfaces/IProductDetails.js'

export interface IWarehouse {
  inventory: IWarehouseProductDetails[]

  initializeProductDetails(productDetails: IWarehouseProductDetails): boolean

  deliverProduct(productDetails: IProductDetails): boolean

  saleProduct(productDetails: IProductDetails): boolean

  deliverProducts(productsDetails: IProductDetails[]): void

  saleProducts(productsDetails: IProductDetails[]): void
}
