import { Layout } from "../Layout.ts";
import { NameBox, MediaBox, EmbassyBox } from "../components/SignatureBox.ts";

export default function EmbassySignature(
    name = 'Felipe Martins',
    position = 'Director',
    email = 'contato.agencia@bamhub.com',
    embassyEmail = 'contato@bamhub.com',
    phone = '+5511966006582'
    ) : string
{
    return Layout(
        'BAMHUB Media & Business Embassy Signature',
        [
            NameBox( name ),
            MediaBox( position, email, phone ),
            EmbassyBox( position, embassyEmail, phone )
        ],
        '750px'
    );
}  