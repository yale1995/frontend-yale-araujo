import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {Main} from '../components/Main'
import { Portfolio } from "../components/Portfolio";


export default function Home() {
  return (
    <>
      <Head>
        <title>yale.dev | frontend</title>
      </Head>
      <div>
        <Header />
        <Main/>
        <Portfolio/>
        <Footer/>
      </div>
    </>
  );
}
