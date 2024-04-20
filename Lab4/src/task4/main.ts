import {
  Image,
  ImageFileSystemLoadingStrategy,
  ImageNetworkLoadingStrategy
} from '@/task4/implementations'

const fileSystemStrategy = new ImageFileSystemLoadingStrategy()
const networkStrategy = new ImageNetworkLoadingStrategy()

const image = new Image(fileSystemStrategy)
image.loadImage('/some/path/to_image.png')

image.loadingStrategy = networkStrategy
image.loadImage('https://example.com/image.jpg')
