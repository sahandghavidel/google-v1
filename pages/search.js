import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import ImageResults from "../components/ImageResults";

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* Search Header */}

      <SearchHeader />

      {/* Search Results */}

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}

      {/* Images Results */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "1";
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${
          context.query.term
        }&start=${startIndex}${context.query.searchType && "&searchType=image"}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
