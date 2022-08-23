import Head from "next/head";
import LandingPage from "../components/landing";

const titleName = "Pretend Clothing Shop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta
          name="description"
          content="A mock-up project for an online clothing shop"
        />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <LandingPage />
        </div>
      </main>
    </div>
  );
}
