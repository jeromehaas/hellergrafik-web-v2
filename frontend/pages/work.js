import Page from "components/04-layouts/page/page";
import Portfolio from "components/03-organisms/portfolio/portfolio";
import { GET_PORTFOLIO } from "graphql/queries";
import client from "graphql/client";

const Work = ({ data }) => {

	return (
		<Page>
			<Portfolio data={ data.portfolio } />
		</Page>
	);

};

export async function getServerSideProps() {

	const portfolio = await client.query({ query: GET_PORTFOLIO() })

	return {
		props: {
			data: {
				portfolio: portfolio.data.portfolio.data.attributes
			}
		}
	}


};

export default Work;