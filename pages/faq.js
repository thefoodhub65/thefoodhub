import Head from "next/head";
import FaqPage from "../components/faq/faq-page";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions | The Food Hub</title>
        <meta
          name="description"
          content="Frequently asked questions about The food hub."
        />
      </Head>
      <FaqPage />
    </div>
  );
}
