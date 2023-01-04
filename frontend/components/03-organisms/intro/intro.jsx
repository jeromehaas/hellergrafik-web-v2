import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import SmallArrowLink from "components/01-atoms/small-arrow-link/small-arrow-link";

const Intro = () => {

	return (
		<Section className="intro"> 
			<Heading className="intro__heading" level="h1">Grafik für helle Köpfe.</Heading>
			<Heading className="intro__subheading" level="h2">Hinter heller grafik steckt eine visuelle Gestalterin aus Luzern mit Passion zu durchdachtem Branding.</Heading>	
			<SmallArrowLink className="intro__link" href="/info">Mehr erfahren</SmallArrowLink>
		</Section>	
	)

};

export default Intro;