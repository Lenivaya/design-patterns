import { ICommand, IUndoable } from '@/interfaces'

export interface IUndoableCommand extends ICommand, IUndoable {}
