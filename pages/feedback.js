import Head from "next/head";
import FeedbackPage from "../components/feedback/feedback-page";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Feedback | The Food Hub</title>
        <meta
          name="description"
          content="Tell us about your favourite dishes at The Food Hub!"
        />
      </Head>
      <FeedbackPage />
    </div>
  );
}
