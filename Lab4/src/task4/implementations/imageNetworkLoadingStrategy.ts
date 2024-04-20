import { IImageLoadingStrategy } from '@/task4/interfaces'

export class ImageNetworkLoadingStrategy implements IImageLoadingStrategy {
  loadImage(href: string): void {
    console.log(`Loading image from network url (${href})`)
  }
}
