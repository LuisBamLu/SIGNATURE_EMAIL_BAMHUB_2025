export function Layout(
    title: string,
    boxes: string[],
    width = '500px'
    ) : string
{
    return (
        `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${ title }</title>
                    <style>
                        a {
                            color: inherit;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: ${ width }; height: 250px; font-family: Arial, sans-serif; font-size: 12px;">
                        <tr>
                        ${ boxes }
                        </tr>
                    </table>
                </body>
            </html>
        `
        );
}
