import { Layout } from "../Layout.ts";
import { NameBox, HomeBox } from "../components/SignatureBox.ts";

export default function EmbassySignature(
    name = 'Felipe Martins',
    position = 'Director',
    email = 'contato.home@bamhub.com',
    phone = '+5511966006582'
    ) : string
{
    return Layout(
        'BAMHUB Business Embassy Signature',
        [
            NameBox( name ),
            HomeBox( position, email, phone )
        ],
        '500px'
    );
}  