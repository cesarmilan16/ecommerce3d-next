import Head from "next/head";

export function Seo(props) {
  const {
    title = "Impresiones 3D - Figuras personalizadas",
    description = "Compra figuras 3D personalizadas y productos impresos en 3D al mejor precio.",
    image = "/favicon.png", // Asegúrate de tener esta imagen en /public
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Meta tags para SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
