import Section from "components/04-layouts/section/section";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";

const Showcase = () => {

	return (
		<Section className="showcase">
			<ProjectPreview title="XUND Bildung Gesundheit Zentralschweiz" href="/projects/xundzebi" image={{ src: '/images/projects/xundzebi/01-xundzebi.jpg', alt: 'Project' }} />	
			<ProjectPreview title="Albertini" href="/projects/albertini" image={{ src: '/images/projects/albertini/01-albertini.jpg', alt: 'Project' }} />	
			<ProjectPreview title="heller grafik" href="/projects/hellergrafik" image={{ src: '/images/projects/hellergrafik/07-hellergrafik.jpg', alt: 'Project' }} />	
		</Section>	
	)

};

export default Showcase;