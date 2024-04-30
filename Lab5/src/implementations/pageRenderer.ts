import { ILightNode } from '@/interfaces'

export class PageRenderer {
  constructor(
    public entrypointElement: ILightNode,
    public title: string = '',
    public lang: string = 'en'
  ) {}

  render() {
    const { html, script } = this.entrypointElement.render()

    return `
      <html lang="${this.lang}">
        <head>
            <title>${this.title}</title>
        </head>
        <body>
          ${html}
          
          <script async defer>
              ${script}
          </script>
        </body>
      </html>
      `
  }
}
