import { Layout } from "../Layout.ts";
import { NameBox, HomeBox, EmbassyBox } from "../components/SignatureBox.ts";

export default function EmbassySignature(
    name = 'Felipe Martins',
    position = 'Director',
    email = 'contato.home@bamhub.com',
    embassyEmail = 'contato@bamhub.com',
    phone = '+5511966006582'
    ) : string
{
    return Layout(
        'BAMHUB Business Embassy Signature',
        [
            NameBox( name ),
            HomeBox( position, email, phone ),
            EmbassyBox( position, embassyEmail, phone )
        ],
        '750px'
    );
}  