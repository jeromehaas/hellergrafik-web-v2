import Section from "components/04-layouts/section/section";
import Heading from "components/01-atoms/heading/heading";
import SmallArrowLink from "components/01-atoms/small-arrow-link/small-arrow-link";

const Intro = ({ data }) => {

	return (
		<Section className="intro"> 
			<Heading className="intro__heading" level="h1">{ data.heading }</Heading>
			<Heading className="intro__subheading" level="h2">{ data.subheading }</Heading>	
			<SmallArrowLink className="intro__link" href={ data.button.href }>{ data.button.label}</SmallArrowLink>
		</Section>	
	)

};



export default Intro;