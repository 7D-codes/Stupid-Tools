import Head from "next/head";
import { getToolMetadata } from "../utils/metadata";

export async function generateMetadata() {
  const metadata = getToolMetadata("/coin-flip");
  return metadata;
}

export default function CoinFlipper() {
  const { title, description } = getToolMetadata("/coin-flip");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main>
        <h1>Coin Flipper</h1>
        <p>Flip a virtual coin and let fate decide for you.</p>

        {/* Coin Flipper Implementation */}
      </main>
    </div>
  );
}
