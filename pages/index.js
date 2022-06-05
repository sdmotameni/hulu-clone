// libraries
import Head from "next/head";

// components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

// utils
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Navbar />
        <Results results={results} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending";

  const url = requests[genre].url;

  const request = await fetch(url).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
