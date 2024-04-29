import { ILightNode } from '@/interfaces'

/**
 * BreadthFirstLightElementNodesIterator is a class that provides a way to
 * iterate over a collection of ILightNode objects in a breadth-first manner.
 * Goes only over given list of nodes without their children
 */
export class BreadthFirstLightElementNodesIterator
  implements Iterable<ILightNode>
{
  constructor(private nodes: ILightNode[]) {}

  [Symbol.iterator](): Iterator<ILightNode> {
    let index = 0
    let nodes = this.nodes

    return {
      next(): IteratorResult<ILightNode, undefined> {
        return index < nodes.length
          ? { value: nodes[index++], done: false }
          : { value: undefined, done: true }
      }
    }
  }
}
