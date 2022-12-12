import Head from "next/head";
import { Header } from "../components/Header";
import {Main} from '../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>yale.dev | frontend</title>
      </Head>
      <div>
        <Header />
        <Main/>
      </div>
    </>
  );
}
