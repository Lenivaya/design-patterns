import { Option } from '@/lib'

export interface IChainable<TChainElement> {
  nextHandler: Option<TChainElement>

  /**
   * Sets next handler returning current chain element
   * */
  setNextHandler(handler: TChainElement): TChainElement

  /**
   * Sets next handler returning next chain element
   * */
  addNextHandler(handler: TChainElement): TChainElement
}
