import Head from "next/head";
import ContactPage from "../components/contact/contact-page";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | The Food Hub</title>
        <meta
          name="description"
          content="Contact The Food Hub via email or phone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactPage />
    </div>
  );
}
