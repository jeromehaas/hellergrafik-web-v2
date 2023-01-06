import Section from "components/04-layouts/section/section";
import Article from "components/02-molecules/article/article";

const Legal = () => {

    return (
        <Section className="legal">
            <Article 
                title="Datenschutz-Erklärung" 
                text="Diese Datenschutzerklärung beinhaltet allgemeinen Angaben zum Umgang von heller grafik mit Ihren Daten sowie Informationen über Ihre Rechte gemäss der Europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG)."  
                details={[
                    { id: 1, type: 'list', title: 'Name und Anschrift', content: [
                        { id: 10, value: 'Isabel Heller', link: '' },
                        { id: 11, value: 'Zähringerstrasse 13', link: '' },
                        { id: 12, value: '6003 Luzern', link: '' },
                    ]},
                    { id: 2, type: 'text', title: 'Datenschutzgesetz', content: 'Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutz-rechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.'},
                    { id: 3, type: 'text', title: 'Allgemaines zur Datenverarbeitung', content: 'Der Schutz Ihrer Daten ist uns wichtig. Wir respektieren Ihre Privatsphäre und setzen uns dafür ein, dass Ihre Daten gemäß den geltenden Gesetzen bearbeitet werden. Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten der betroffenen Person erfolgt nur nach und mit Ihrer Einwilligung. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist. Mit der vorliegenden Datenschutzerklärung informieren wir Sie umfassend über unsere Datenbearbeitungen.'},
                    { id: 4, type: 'text', title: 'Bearbeitung von Personaldaten', content: 'Unter Bearbeitung von Personendaten fallen z.B. die Erhebung, Speicherung, Nutzung, Übermittlung, Bekanntgabe und Löschung von Personendaten. Wir sammeln Personendaten, welche bei Ihrem Besuch auf unserer Website automatisch erfasst werden. Es sind dies z.B. die Aktivitäten auf der heller grafik Webseite und die IP-Adresse von technischen Geräten..'},
                    { id: 4, type: 'text', title: 'Verwendung von Personaldaten', content: 'Wir verwenden Ihre Personendaten in erster Linie zum Zweck, um Daten über unsere Zielgruppe zu sammeln, damit wir die Webseite bestmöglich auf deren Bedürfnisse abstimmen können'},
                    { id: 5, type: 'text', title: 'An wenb gehen die Personaldaten weiter?', content: 'Wir leiten Ihre Daten, falls für die hier in der Datenschutzerklärung genannten Zwecke notwendig, an Dritte weiter, um z.B. technische oder organisatorische Dienstleistungen in Anspruch zu nehmen, die wir für die Erfüllung der genannten Zwecke oder unserer sonstigen Geschäftstätigkeit benötigen. Unsere Dienstleistenden sind verpflichtet, die Personendaten ausschließlich in unserem Auftrag und nach unseren Instruktionen zu bearbeiten. Wir verpflichten unsere Dienstleistenden zur Einhaltung von technischen und organisatorischen Maßnahmen, welche den Schutz der Personendaten sicherstellen.'},
                ]}
                />
        </Section>

    );

};

export default Legal;