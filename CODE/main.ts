import { Home, Media, Embassy, HomeEmbassy, MediaEmbassy } from "./signatures/Signatures.ts";

const homeSignature = Home();
const mediaSignature = Media();
const embassySignature = Embassy();
const homeEmbassySignature = HomeEmbassy();
const mediaEmbassySignature = MediaEmbassy();

console.log( 'WRITING E-MAIL SIGNATURES:' );

console.log( 'Embassy...' );
await Deno.writeTextFile( 'EmbassyEmailSignature.html', embassySignature);
console.log( 'Home...' );
await Deno.writeTextFile( 'HomeEmailSignature.html', homeSignature);
console.log( 'Media...' );
await Deno.writeTextFile( 'MediaEmailSignature.html', mediaSignature);
console.log( 'Home and Embassy...' );
await Deno.writeTextFile( 'HomeEmbassyEmailSignature.html', homeEmbassySignature);
console.log( 'Media and Embassy...' );
await Deno.writeTextFile( 'MediaEmbassyEmailSignature.html', mediaEmbassySignature);
console.log( '...' );
console.log( '...' );
console.log( '...' );
console.log( 'E-MAIL SIGNATURES WRITTEN!' );
