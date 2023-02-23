import Page from "components/04-layouts/page/page";
import Hero from "components/03-organisms/hero/hero";
import Intro from "components/03-organisms/intro/intro";
import Showcase from "components/03-organisms/showcase/showcase";
import { GET_SHOWCASE, GET_HERO, GET_INTRO } from "graphql/queries";
import client from "graphql/client";

const Start = ({ data }) => {

  return (
		<Page>
			<Hero data={ data.hero } />
			<Intro data={ data.intro } />
			<Showcase data={ data.showcase } />
		</Page>
  );

};

export async function getServerSideProps() {

	const intro = await client.query({ query: GET_INTRO() });
	const hero = await client.query({ query: GET_HERO() });
	const showcase = await client.query({ query: GET_SHOWCASE() });

	return {
		props: {
			data: {
				hero: hero.data.hero.data.attributes,
				intro: intro.data.intro.data.attributes,
				showcase: showcase.data.showcase.data.attributes
			},
		},
	};

};

export default Start;