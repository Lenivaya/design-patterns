import { IImageLoadingStrategy } from '@/task4/interfaces/IImageLoadingStrategy'

export class Image {
  constructor(public loadingStrategy: IImageLoadingStrategy) {}

  loadImage(href: string): void {
    this.loadingStrategy.loadImage(href)
  }
}
