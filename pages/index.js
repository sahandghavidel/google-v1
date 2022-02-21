import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google v1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Body */}

      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          objectFit="cover"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-[90%] mx-auto rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500 " />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}

      <Footer />
    </div>
  );
}
