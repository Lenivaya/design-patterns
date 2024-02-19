import { IInvoice } from '@/interfaces/IInvoice.js'
import { IWarehouseProductDetails } from '@/interfaces/IWarehouseProductDetails.js'
import { IProductDetails } from '@/interfaces/IProductDetails.js'

export interface IReporter {
  productsDeliveryInvoices: IInvoice[]
  productsSalesInvoices: IInvoice[]
  inventorization: IWarehouseProductDetails[]

  reportProductsDelivery(deliveredProductsDetails: IProductDetails[]): void

  reportProductsSale(soldProductsDetails: IProductDetails[]): void

  reportInventorization(inventorization: IWarehouseProductDetails[]): void

  inventorizationReport: string
}
