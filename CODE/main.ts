import { Home, Media, Embassy, HomeEmbassy, MediaEmbassy } from "./signatures/Signatures.ts";

const homeSignature = Home();
const mediaSignature = Media();
const embassySignature = Embassy();
const homeEmbassySignature = HomeEmbassy();
const mediaEmbassySignature = MediaEmbassy();

console.log( 'WRITING E-MAIL SIGNATURES:' );
await Deno.mkdir( './generated', { recursive: true } );

console.log( 'Embassy...' );
await Deno.create( './generated/EmbassyEmailSignature.html' );
await Deno.writeTextFile( './generated/EmbassyEmailSignature.html', embassySignature);
console.log( 'Home...' );
await Deno.create( './generated/HomeEmailSignature.html' );
await Deno.writeTextFile( './generated/HomeEmailSignature.html', homeSignature);
console.log( 'Media...' );
await Deno.create( './generated/MediaEmailSignature.html' );
await Deno.writeTextFile( './generated/MediaEmailSignature.html', mediaSignature);
console.log( 'Home and Embassy...' );
await Deno.create( './generated/HomeEmbassyEmailSignature.html' );
await Deno.writeTextFile( './generated/HomeEmbassyEmailSignature.html', homeEmbassySignature);
console.log( 'Media and Embassy...' );
await Deno.create( './generated/MediaEmbassyEmailSignature.html' );
await Deno.writeTextFile( './generated/MediaEmbassyEmailSignature.html', mediaEmbassySignature);
console.log( '...' );
console.log( '...' );
console.log( '...' );
console.log( 'E-MAIL SIGNATURES WRITTEN!' );
