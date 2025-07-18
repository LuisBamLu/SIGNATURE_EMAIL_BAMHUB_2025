export default function NameBox(
    name = ''
    )
{
    let parts = ( name || 'Felipe Martins' ).trim().split(/\s+/);
    let firstName =
        parts[ 0 ]
        ? parts[ 0 ].charAt( 0 ).toUpperCase() + parts[ 0 ].slice( 1 ).toLowerCase()
        : '';
    let lastName =
        parts.length > 1
        ? parts[ parts.length - 1 ].toUpperCase()
        : '';

    let fullName = `${ firstName } ${ lastName }`.trim();

    return (
        `
            <td style="width: 250px; padding: 20px 30px; background-color: #f0f0f0; vertical-align: middle;">
                <p style="margin: 0; font-size: 20px; font-weight: bold; color: #000000; letter-spacing: 1px;">
                    ${ fullName }
                </p>
                <div style="border-bottom: 1px solid #000000; margin: 20px 0;" />
                <p style="margin: 0; color: #333333; line-height: 1.5;">
                    Luxembourg - Miami - São Paulo<br>
                    Madrid
                </p>
            </td>
        `
        );
}