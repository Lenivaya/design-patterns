import {
  IProductDetails,
  IReporter,
  IWarehouse,
  IWarehouseProductDetails
} from '@/interfaces/index.js'
import { WarehouseProductDetails } from '@/implementations/productDetails.js'

export class Warehouse implements IWarehouse {
  private productsDetails: Map<string, IWarehouseProductDetails> = new Map()

  constructor(private reporter: IReporter) {}

  get inventory(): IWarehouseProductDetails[] {
    return Array.from(this.productsDetails.values())
  }

  initializeProductDetails(productDetails: IWarehouseProductDetails): boolean {
    return this.updateAndReport(
      productDetails,
      this.reporter.reportProductsDelivery.bind(this.reporter)
    )
  }

  deliverProduct(productDetails: IProductDetails): boolean {
    return this.updateAndReport(
      productDetails,
      this.reporter.reportProductsDelivery.bind(this.reporter)
    )
  }

  saleProduct(productDetails: IProductDetails): boolean {
    return this.updateAndReport(
      productDetails,
      this.reporter.reportProductsSale.bind(this.reporter),
      false
    )
  }

  deliverProducts(productsDetails: IProductDetails[]): void {
    this.updateAndReportMany(
      productsDetails,
      this.reporter.reportProductsDelivery.bind(this.reporter)
    )
  }

  saleProducts(productsDetails: IProductDetails[]): void {
    this.updateAndReportMany(
      productsDetails,
      this.reporter.reportProductsSale.bind(this.reporter),
      false
    )
  }

  private updateAndReport(
    productDetails: IProductDetails,
    reportCallback: (details: IProductDetails[]) => void,
    isDelivery: boolean = true
  ): boolean {
    const existingDetails = this.productsDetails.get(
      productDetails.product.name
    )

    if (!existingDetails) {
      this.productsDetails.set(
        productDetails.product.name,
        new WarehouseProductDetails(
          productDetails.product,
          productDetails.quantity,
          productDetails.measureUnit,
          productDetails.pricePerUnit
        )
      )
      reportCallback([productDetails])
      return true
    }

    if (isDelivery) existingDetails.add(productDetails)
    else existingDetails.subtract(productDetails)

    reportCallback([productDetails])
    this.reporter.reportInventorization(this.inventory)

    return true
  }

  private updateAndReportMany(
    productsDetails: IProductDetails[],
    reportCallback: (details: IProductDetails[]) => void,
    isDelivery: boolean = true
  ): void {
    productsDetails.forEach((detail) =>
      this.updateAndReport(detail, () => {}, isDelivery)
    )
    reportCallback(productsDetails)
    this.reporter.reportInventorization(this.inventory)
  }
}
