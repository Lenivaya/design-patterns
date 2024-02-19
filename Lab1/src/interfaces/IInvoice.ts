import { IProductDetails } from '@/interfaces/IProductDetails.js'

export interface IInvoice {
  invoiceProductsDetails: IProductDetails[]
  dateCreated: Date
  invoiceName: string
}
