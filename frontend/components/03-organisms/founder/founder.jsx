import Section from "components/04-layouts/section/section";
import Heading from 'components/01-atoms/heading/heading';
import Text from 'components/01-atoms/text/text';
import Article from "components/02-molecules/article/article";
import Picture from "components/02-molecules/picture/picture";

const Founder  = () => {

    return (
        <Section className="founder"> 
            <Picture className="founder__image" images={[ {src: '/images/isabel-heller/01_isabel-heller.jpg', alt: 'Isabel Helller' }]}  />
            <Article 
                title="hellergrafik - eigenes Branding" 
                text="Ganz nach dem Motto und meinem Anspruch an meine Arbeit «Grafik für helle Köpfe» entstand mein eigener visueller Auftritt. Mein Name beziehungsweise das Wort «heller» ist mit seiner Mehrdeutigkeit ein wichtiger Teil meines Auftritts. Auf der Postkartenserie von heller grafik wird «heller» spielerisch und mit etwas Selbstironie auf verschiedene Arten in Szene gesetzt – visuell aber auch inhaltlich. Die erste Edition der Postkarten habe ich im Rahmen eines Siebdruckkurses selbst produziert – von der analogen und digitalen Motiverstellung, über die Belichtung des Siebs bis hin zum Farbenmischen."
                details={[]}
                // details={[
                //     { id: 1, type: 'text', title: "Realisation", content: '2020' },
                //     { id: 2, type: 'text', title: "Leistungen", content: 'Branding, Print Design, Digital Design' },
                //     { id: 3, type: 'table', title: "Laufbahn", content: [
                //         { id: 10, title: '2018 - 2019', value: 'Lehrgang Digital Experience Design, SfG Aargau' },
                //         { id: 11, title: '2014 – 2016', value: 'Typografische Gestalterin EFA, SfG Bern und Biel' },
                //         { id: 12, title: '2013 – 2014', value: 'Tagesklasse «Sehen und Gestalten», Gestaltungsschule Farbmühle, Luzern' },
                //     ] },
                // ]} 
                />
            <Picture className="founder__image" images={[ {src: '/images/projects/hellergrafik/03-hellergrafik.jpg', alt: 'Isabel Helller' }]}  />
        </Section>
    )

};

export default Founder;
