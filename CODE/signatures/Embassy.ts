import { Layout } from "../Layout.ts";
import { NameBox, EmbassyBox } from "../components/SignatureBox.ts";

export default function EmbassySignature(
    name = 'Felipe Martins',
    position = 'Director',
    email = 'contato@bamhub.com',
    phone = '+5511966006582'
    ) : string
{
    return Layout(
        'BAMHUB Business Embassy Signature',
        [
            NameBox( name ),
            EmbassyBox( position, email, phone )
        ],
        '500px'
    );
}  