import Head from "next/head";
import MenuPage from "../components/menu/menu-page";
import { firebaseAdmin } from "../helpers/firebase/firebaseAdmin";

export default function Menu({ items }) {
  return (
    <div>
      <Head>
        <title>Tiffin Service | The Food Hub</title>
        <meta
          name="description"
          content="Get the delicious different dishes every day via tiffin service at The Food Hub."
        />
      </Head>
      <MenuPage items={items} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await firebaseAdmin
    .firestore()
    .collection("items")
    .orderBy("category", "asc")
    .get();

  return {
    props: {
      items: res.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      }),
    },
    revalidate: 60 * 60,
  };
};
