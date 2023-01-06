import Article from "components/02-molecules/article/article";
import Section from "components/04-layouts/section/section";
import Picture from "components/02-molecules/picture/picture";

const ProjectDetail = () => {
    
    return (
        <Section className="project-detail">
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/01-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Article 
                title="hellergrafik - eigenes Branding" 
                text="Ganz nach dem Motto und meinem Anspruch an meine Arbeit «Grafik für helle Köpfe» entstand mein eigener visueller Auftritt. Mein Name beziehungsweise das Wort «heller» ist mit seiner Mehrdeutigkeit ein wichtiger Teil meines Auftritts. Auf der Postkartenserie von heller grafik wird «heller» spielerisch und mit etwas Selbstironie auf verschiedene Arten in Szene gesetzt – visuell aber auch inhaltlich. Die erste Edition der Postkarten habe ich im Rahmen eines Siebdruckkurses selbst produziert – von der analogen und digitalen Motiverstellung, über die Belichtung des Siebs bis hin zum Farbenmischen."
                details={[
                    { id: 1, type: 'text', title: "Realisation", content: '2020' },
                    { id: 2, type: 'text', title: "Leistungen", content: 'Branding, Print Design, Digital Design' },
                    { id: 3, type: 'table', title: "Laufbahn", content: [
                        { id: 10, title: '2018 - 2019', value: 'Lehrgang Digital Experience Design, SfG Aargau' },
                        { id: 11, title: '2014 – 2016', value: 'Typografische Gestalterin EFA, SfG Bern und Biel' },
                        { id: 12, title: '2013 – 2014', value: 'Tagesklasse «Sehen und Gestalten», Gestaltungsschule Farbmühle, Luzern' },
                    ] },
                ]}
                />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/01-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/02-hellergrafik.jpg', alt: 'Heller Grafik'}, { src: '/images/projects/hellergrafik/03-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/04-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/05-hellergrafik.jpg', alt: 'Heller Grafik'}, { src: '/images/projects/hellergrafik/06-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/07-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
            <Picture className="project-detail__image" images={ [{ src: '/images/projects/hellergrafik/08-hellergrafik.jpg', alt: 'Heller Grafik'}] } />
        </Section>
    );

};

export default ProjectDetail;