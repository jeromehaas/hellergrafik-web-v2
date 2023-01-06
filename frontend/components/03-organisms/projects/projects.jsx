import Section from "components/04-layouts/section/section";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";

const Projects = () => {

	return (
		<Section className="projects">
			<ProjectPreview title="XUND Bildung Gesundheit Zentralschweiz" href="/project/xund-bildung-gesundheit-zentralschweiz" image={{ src: '/images/projects/xundzebi/01-xundzebi.jpg', alt: 'Project' }} />	
			<ProjectPreview title="Albertini" href="Ablertini" image={{ src: '/images/projects/albertini/01-albertini.jpg', alt: 'Project' }} />	
			<ProjectPreview title="heller grafik" href="/project/heller-grafik" image={{ src: '/images/projects/hellergrafik/07-hellergrafik.jpg', alt: 'Project' }} />	
		</Section>	
	);

};

export default Projects;
