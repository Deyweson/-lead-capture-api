export function CreateEmail(name: string) {

  const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test lead capture api</title>
        </head>
        <body>
            <h1>Thanks for testing/using my API ${name}</h1>
            <img src="https://gifdb.com/images/high/naruto-okay-sign-anime-9ra3hrwgexpu9hja.gif">
        </body>
    </html>
  `

  return html
}