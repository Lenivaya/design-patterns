import { ILightNode } from '@/interfaces'

export class PageRenderer {
  constructor(
    public entrypointElement: ILightNode,
    public title: string = '',
    public lang: string = 'en'
  ) {}

  render() {
    return `
      <html lang="${this.lang}">
        <head>
            <title>${this.title}</title>
        </head>
        <body>
          ${this.entrypointElement.render()}
          
          <script async defer>
              ${this.entrypointElement.generateScript()}
          </script>
        </body>
      </html>
      `
  }
}
