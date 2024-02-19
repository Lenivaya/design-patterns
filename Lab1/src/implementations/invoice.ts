import { IInvoice, IProductDetails } from '@/interfaces/index.js'

export abstract class Invoice implements IInvoice {
  protected constructor(
    public invoiceProductsDetails: IProductDetails[] = [],
    public dateCreated: Date = new Date(),
    public invoiceName: string = 'Invoice'
  ) {}

  toString(): string {
    let stringBuilder: string = `${this.invoiceName}:\n`
    for (const productInfo of this.invoiceProductsDetails)
      stringBuilder += `${productInfo}\n`

    stringBuilder +=
      `Date created: ${this.dateCreated.toISOString()}\n` +
      `Total product titles in invoice: ${this.invoiceProductsDetails.length}`

    return stringBuilder
  }
}

export class SaleInvoice extends Invoice {
  constructor(
    invoiceProductsDetails: IProductDetails[],
    dateCreated: Date = new Date()
  ) {
    super(invoiceProductsDetails, dateCreated, 'Sales invoice')
  }
}

export class ProductDeliveryInvoice extends Invoice {
  constructor(
    invoiceProductsDetails: IProductDetails[],
    dateCreated: Date = new Date()
  ) {
    super(invoiceProductsDetails, dateCreated, 'Product delivery invoice')
  }
}
