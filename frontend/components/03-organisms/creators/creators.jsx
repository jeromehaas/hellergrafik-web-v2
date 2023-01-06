import Section from "components/04-layouts/section/section";
import Article from "components/02-molecules/article/article";

const Creators = () => {

    return (
        <Section className="creators">
            <Article className="Impressum" text="" details={[
                { id: 1, type: 'list', title: 'Adresse', content: [
                    { id: 13, value: 'hellergrafik', link: '' },
                    { id: 10, value: 'Isabel Heller', link: '' },
                    { id: 11, value: 'Zähringerstrasse 13', link: '' },
                    { id: 12, value: '6003 Luzern', link: '' },
                ]},
                { id: 2, type: 'list', title: 'Kontakt', content: [
                    { id: 20, value: 'isabel@hellergrafik.ch', link: 'mailto:isabel.hellergrafik.ch' },
                    { id: 21, value: '077 405 23 49', link: 'tel:0774052349' },
                    { id: 22, value: '077 405 23 49', link: 'tel:0774052349' },
                ]},
                { id: 3, type: 'list', title: 'Konzeption und Gestaltung', content: [
                    { id: 30, value: 'Isabel Heller', link: '' },
                    { id: 31, value: 'Zähringerstrasse 13', link: '' },
                    { id: 32, value: '6003 Luzern', link: '' },
                ]},
                { id: 4, type: 'list', title: 'Umsetzung', content: [
                    { id: 40, value: 'Jérôme Haas', link: '' },
                    { id: 41, value: 'Bodenmatte 16a 13', link: '' },
                    { id: 42, value: '5647 Oberrüti', link: '' },
                    { id: 42, value: 'hello@jeromehaas.ch', link: 'mailto:hello@jeromehaas.ch' },
                ]},
                { id: 3, type: 'text', title: '', content: 'Copyright © 2020 Isabel Heller. Alle Rechte vorbehalten. Für die Vervielfältigung oder Veränderung jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.' },
            ]} />
        </Section>
    );

};

export default Creators