import { IVisitor } from '@/interfaces/IVisitor'

export interface IVisitable {
  accept(visitor: IVisitor): void
}
