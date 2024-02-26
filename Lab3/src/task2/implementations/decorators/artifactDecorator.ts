import { HeroDecorator } from '@/task2/index.js'

export class ArtifactDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Artifact']
}
