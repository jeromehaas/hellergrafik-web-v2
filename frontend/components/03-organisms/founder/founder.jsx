import Section from "components/04-layouts/section/section";
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Article from "components/02-molecules/article/article";
import Picture from "components/02-molecules/picture/picture";

const Founder  = () => {

    return (
        <Section className="founder"> 
            <Picture className="founder__image" images={[ {src: '/images/isabel-heller/01_isabel-heller.jpg', alt: 'Isabel Helller' }]}  />
            <Article className="founder__article" title="Isabel Heller Visuelle Gestalterin" text="Ich bin eine neugierige Weltenbummlerin mit Affinität zu Design, gutem Essen und spannenden Büchern. In meinem Berufsalltag sowie in meiner Freizeit schaue ich über den Tellerrand hinaus und mag es, mich mit Neuem auseinanderzusetzen."  /> 
            <Picture className="founder__image" images={[ {src: '/images/projects/hellergrafik/03-hellergrafik.jpg', alt: 'Isabel Helller' }]}  />
        </Section>
    )

};

export default Founder;
