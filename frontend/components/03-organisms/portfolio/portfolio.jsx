import Section from "components/04-layouts/section/section";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";

const Portfolio = ({ data }) => {

	return (
		<Section className="portfolio">
			{ data.projects.data.map((item) => (
				<ProjectPreview 
					title={ item.attributes.article.heading } 
					href={`/projects/${item.id}`} 
					image={{ src: `http://localhost:1337${ item.attributes.teaser.data.attributes.formats?.medium.url || item.attributes.teaser.data.attributes.url }`, alt: item.attributes.article.heading }} 
					key={ item.id }
				/>	
			))}
		</Section>	
	);

};

export default Portfolio;
