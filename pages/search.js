import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

export default function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search page</title>
      </Head>
      {/* Search Header */}

      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
