import Section from "components/04-layouts/section/section";
import Text from "components/01-atoms/text/text";
import SmallArrowLink from "components/01-atoms/small-arrow-link/small-arrow-link";
import Picture from "components/02-molecules/picture/picture";

const Teaser = () => {

    return (
        <Section className="teaser">
            <Text className="teaser__text text--big">heller grafik fokussiert sich auf wertebasiertes Branding im On- und Offlinebereich. Die visuelle Sprache einer Marke soll unternehmerische Ziele und Werte widerspiegeln und bei deren Publikum Anklang finden.</Text>
            <Text className="teaser__text text--big">Ich höre zu, möchte Zusammenhänge und Zielgruppen verstehen.</Text>
            <SmallArrowLink className="teaser__link" href="/contact">Kontakt aufnehmen</SmallArrowLink>
            <Picture className="teaser__image" images={ [{ src: '/images/projects/hellergrafik/12-hellergrafik.jpg', alt: 'light my fire' }] } />
        </Section>
    )

};

export default Teaser;