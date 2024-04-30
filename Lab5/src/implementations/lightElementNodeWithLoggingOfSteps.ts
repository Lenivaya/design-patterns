import { LightElementNode } from '@/implementations/lightElementNode'

export class LightElementNodeWithLoggingOfSteps extends LightElementNode {
  onClassListApplied() {
    console.log('Class list applied')
  }

  onTextRendered() {
    console.log('Text rendered')
  }

  onScriptsRendered() {
    console.log('Scripts rendered')
  }

  onCreated() {
    console.log('Node was created')
  }
}
