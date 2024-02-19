import { IMoney } from '@/interfaces/IMoney.js'
import { ISummable } from '@/interfaces/ISummable.js'
import { ISubtractable } from '@/interfaces/ISubtractable.js'

export interface IProductPrice
  extends IMoney,
    ISummable<IMoney>,
    ISubtractable<IMoney> {}
