import { Layout } from "../Layout.ts";
import { NameBox, MediaBox } from "../components/SignatureBox.ts";

export default function EmbassySignature(
    name = 'Felipe Martins',
    position = 'Director',
    email = 'contato.agencia@bamhub.com',
    phone = '+5511966006582'
    ) : string
{
    return Layout(
        'BAMHUB Media Signature',
        [
            NameBox( name ),
            MediaBox( position, email, phone )
        ],
        '500px'
    );
}  