import Head from "next/head";

export default function Metatags({
  title = "Nextric - Next.js + Firebase Project",
  description = "A social media  web app project builded with Next.js + Firebase from the course by Fireship.io",
  image = "https://fireship.io/courses/react-next-firebase/img/featured.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@richidoes" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
