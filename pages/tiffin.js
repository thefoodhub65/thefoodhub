import Head from "next/head";
import TiffinPage from "../components/tiffin/tiffin-page";
import { firebaseAdmin } from "../helpers/firebase/firebaseAdmin";

export default function Tiffin({ tiffins }) {
  return (
    <div>
      <Head>
        <title>Tiffin Service | The Food Hub</title>
        <meta
          name="description"
          content="Get the delicious different dishes every day via tiffin service at The Food Hub."
        />
      </Head>
      <TiffinPage tiffins={tiffins} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await firebaseAdmin
    .firestore()
    .collection("tiffin")
    .orderBy("priority", "asc")
    .get();

  return {
    props: {
      tiffins: res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      }),
    },
    revalidate: 60 * 60,
  };
};
