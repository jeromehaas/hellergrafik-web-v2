import Section from "components/04-layouts/section/section";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";

const Showcase = ({ data }) => {

	return (
		<Section className="showcase">

			{ data.projects.data.map((item) => (
				<ProjectPreview 
					className="showcase__item" 
					title={ item.attributes.article.heading } 
					href={`/projects/${ item.id }`} 
					image={{ src: `http://localhost:1337${ item.attributes.teaser.data.attributes.formats?.large.url || item.attributes.teaser.data.attributes.url }`, alt: item.attributes.article.heading }} 
					key={ item.id }
				/>	
			))}
		</Section>	
	)

};

export default Showcase;