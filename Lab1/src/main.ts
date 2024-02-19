import {
  Money,
  USD,
  UAH,
  EUR,
  Product,
  Reporter,
  ProductDetails,
  Warehouse
} from '@/implementations/index.js'
import { IProduct, IReporter, IWarehouse } from '@/interfaces/index.js'

const logTitle = (title: string) => console.log(`\n==== ${title} ====\n`)

logTitle('Money')
const prices: Money[] = [
  new USD(2, 10),
  new UAH(100, 90),
  new EUR(2450, 30),
  new USD(30, 5)
]
prices.forEach((price) => console.log(price.toString()))
prices.map((price) => price.currencyName).forEach((name) => console.log(name))

logTitle('Products')
const products: IProduct[] = [
  new Product('Red apple', new UAH(30, 0)),
  new Product('Potato', new UAH(2, 30)),
  new Product('Blue jeans', new UAH(2000, 0))
]
products[0].decreasePrice(new UAH(5, 0))
products.forEach((product) => console.log(product.toString()))

logTitle('Warehouse, reporting invoices')
const reporter: IReporter = new Reporter()
const warehouse: IWarehouse = new Warehouse(reporter)

// Delivering some products to warehouse
warehouse.deliverProducts([
  new ProductDetails(new Product('Smartphone', new UAH(10_000, 0)), 10),
  new ProductDetails(new Product('Laptop', new UAH(30_000, 0)), 10),
  new ProductDetails(products[0], 10),
  new ProductDetails(products[1], 20),
  new ProductDetails(products[2], 3)
])
// Sales
warehouse.saleProducts([
  new ProductDetails(products[0], 5),
  new ProductDetails(products[1], 10),
  new ProductDetails(products[2], 1)
])

logTitle('Delivery invoices report')
reporter.productsDeliveryInvoices.forEach((invoice) =>
  console.log(`\n${invoice.toString()}\n`)
)

logTitle('Sales invoices report')
reporter.productsSalesInvoices.forEach((invoice) =>
  console.log(invoice.toString())
)

logTitle('Inventorization report')
console.log(reporter.inventorizationReport)
