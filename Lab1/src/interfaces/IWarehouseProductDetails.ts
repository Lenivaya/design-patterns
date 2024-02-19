import { IProductDetails } from '@/interfaces/IProductDetails.js'
import { ISummable } from '@/interfaces/ISummable.js'
import { ISubtractable } from '@/interfaces/ISubtractable.js'

export interface IWarehouseProductDetails
  extends IProductDetails,
    ISummable<IProductDetails>,
    ISubtractable<IProductDetails> {
  lastRestockDate: Date
}
