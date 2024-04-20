import { IImageLoadingStrategy } from '@/task4/interfaces'

export class ImageFileSystemLoadingStrategy implements IImageLoadingStrategy {
  loadImage(href: string): void {
    console.log(`Loading image from fs url (${href})`)
  }
}
