import Section from "components/04-layouts/section/section";
import Picture from "components/02-molecules/picture/picture";

const Hero = () => {

	return (
		<Section className="hero">
			<Picture className="hero__image" images={ [{ src: '/images/projects/hellergrafik/01-hellergrafik.jpg', orientation: 'landscape', alt: "heller grafik"}] }  />
		</Section>
	);

};

export default Hero;