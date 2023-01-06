import Section from "components/04-layouts/section/section";
import ContactInfos from "components/02-molecules/contact-infos/contact-infos";
import Picture from "components/02-molecules/picture/picture";

const TouchPoints = () => {

    return (
        <Section className="touchpoints">
            <ContactInfos className="touchpoints__contact-infos" />
            <Picture className="touchpoints__image" images={ [{ src: '/images/projects/hellergrafik/17-hellergrafik.jpg', alt: 'Isabel Heller'}]} />
            <Picture className="touchpoints__image" images={ [{ src: '/images/isabel-heller/02_isabel-heller.jpg', alt: 'Isabel Heller'}]} />
        </Section>
    );

};

export default TouchPoints;