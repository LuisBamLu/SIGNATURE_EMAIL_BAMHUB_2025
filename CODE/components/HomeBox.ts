export default function HomeBox(
    position,
    email,
    phone
    )
{
    position = position || 'Director';
    email = email || 'contato.home@bamhub.com';
    phone = phone || '+5511966006582';

    return (
        `
            <td style="width: 250px; padding: 20px 30px; background-color: #20443b; color: #ffffff; vertical-align: top;">
                <img src="https://i.ibb.co/4Z5n5Vw/BAMHUB-BUSINESS-HOME-White.png" alt="BAMHUB Business Home Logo" width="160" style="display: block; margin-bottom: 20px;">
                <p style="margin: 0 0 15px 0; font-size: 14px; font-weight: bold;">
                    ${ position }
                </p>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                        <td style="width: 20px; vertical-align: middle;">
                            <img src="https://i.ibb.co/mS7JpT5/icon-web-white.png" alt="email icon" width="14" height="14">
                        </td>
                        <td style="vertical-align: middle;">
                            <a href="mailto:${ email }">${ email }</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 5px;"></td>
                    </tr>
                    <tr>
                        <td style="width: 20px; vertical-align: middle;">
                            <img src="https://i.ibb.co/SsvTf6W/icon-li-white.png" alt="phone icon" width="14" height="14">
                        </td>
                        <td style="vertical-align: middle;">
                            <a href="tel:${ phone }">${ phone }</a>
                        </td>
                    </tr>
                </table>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                    <tr>
                        <td>
                            <a href="#" style="border: 1px solid #ffffff; display: block; padding: 4px;">
                                <img src="https://i.ibb.co/mS7JpT5/icon-web-white.png" alt="Website" width="16" height="16">
                            </a>
                        </td>
                        <td style="width: 5px;"></td>
                        <td>
                            <a href="#" style="border: 1px solid #ffffff; display: block; padding: 4px;">
                                <img src="https://i.ibb.co/SsvTf6W/icon-li-white.png" alt="LinkedIn" width="16" height="16">
                            </a>
                        </td>
                        <td style="width: 5px;"></td>
                        <td>
                            <a href="#" style="border: 1px solid #ffffff; display: block; padding: 4px;">
                                <img src="https://i.ibb.co/K9fXJ2j/icon-ig-white.png" alt="Instagram" width="16" height="16">
                            </a>
                        </td>
                    </tr>
                    </table>
            </td>
        `
        );
}