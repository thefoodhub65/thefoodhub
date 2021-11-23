import Head from "next/head";
import Hero from "../components/homepage/hero";
import OurTeam from "../components/homepage/our-team";
import PopularCategory from "../components/homepage/popular-category";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Food Hub</title>
        <meta
          name="description"
          content="Satisfy your cravings with the most delicious food at The Food Hub."
        />
      </Head>
      <Hero />
      <PopularCategory />
      <OurTeam />
    </div>
  );
}
