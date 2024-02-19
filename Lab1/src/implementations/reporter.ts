import {
  ProductDeliveryInvoice,
  SaleInvoice
} from '@/implementations/invoice.js'
import {
  IInvoice,
  IProductDetails,
  IReporter,
  IWarehouseProductDetails
} from '@/interfaces/index.js'

export class Reporter implements IReporter {
  constructor(
    public productsDeliveryInvoices: IInvoice[] = [],
    public productsSalesInvoices: IInvoice[] = [],
    public inventorization: IWarehouseProductDetails[] = []
  ) {}

  reportProductsDelivery(deliveredProductsDetails: IProductDetails[]): void {
    this.productsDeliveryInvoices.push(
      new ProductDeliveryInvoice(deliveredProductsDetails)
    )
  }

  reportProductsSale(soldProductsDetails: IProductDetails[]): void {
    this.productsSalesInvoices.push(new SaleInvoice(soldProductsDetails))
  }

  reportInventorization(inventorization: IWarehouseProductDetails[]): void {
    this.inventorization = inventorization
  }

  get inventorizationReport(): string {
    return this.createInventorizationReport()
  }

  private createInventorizationReport(): string {
    let reportString: string = 'Inventorization\n'
    for (const productDetails of this.inventorization)
      reportString += `${productDetails}\n`
    return reportString
  }
}
