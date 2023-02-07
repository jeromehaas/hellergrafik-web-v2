import Section from "components/04-layouts/section/section";
import Picture from "components/02-molecules/picture/picture";

const Hero = ({ data }) => {

	return (
		<Section className="hero">
			<Picture 
				className="hero__image" 
				images={ [{ src: `http://localhost:1337${data.image.data.attributes.formats.large.url}`, orientation: 'landscape', alt: "heller grafik"}] }  
				priority={ true }
			/>
		</Section>
	);

};

export default Hero;