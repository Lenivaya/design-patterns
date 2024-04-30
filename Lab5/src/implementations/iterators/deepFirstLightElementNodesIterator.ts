import { ILightNode } from '@/interfaces'
import { LightElementNode } from '@/implementations'

/**
 * DeepFirstLightElementNodesIterator is a class that provides a way to
 * iterate over a collection of ILightNode objects in a deep-first manner.
 * Goes recursively over the children of each LightElementNode
 */
export class DeepFirstLightElementNodesIterator
  implements Iterable<ILightNode>
{
  constructor(private nodes: ILightNode[]) {}

  *[Symbol.iterator](): Iterator<ILightNode> {
    for (const node of this.nodes) {
      yield node
      if (node instanceof LightElementNode) {
        const iterator = new DeepFirstLightElementNodesIterator(node.children)
        yield* iterator
      }
    }
  }
}
