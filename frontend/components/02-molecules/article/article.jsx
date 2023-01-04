import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";

const Article = ({ className }) => {

	return (
			<div className={`${ className } article`}>
				<Heading className="article__heading">heller grafik – eigenes Branding</Heading>	
				<div className="article__text text">
					<Text className="text__item">Ganz nach dem Motto und meinem Anspruch an meine Arbeit «Grafik für helle Köpfe» entstand mein eigener visueller Auftritt. Mein Name beziehungsweise das Wort «heller» ist mit seiner Mehrdeutigkeit ein wichtiger Teil meines Auftritts.</Text>
					<Text className="text__item">Auf der Postkartenserie von heller grafik wird «heller» spielerisch und mit etwas Selbstironie auf verschiedene Arten in Szene gesetzt – visuell aber auch inhaltlich. Die erste Edition der Postkarten habe ich im Rahmen eines Siebdruckkurses selbst produziert – von der analogen und digitalen Motiverstellung, über die Belichtung des Siebs bis hin zum Farbenmischen.</Text>
					<Text className="text__item">Eine zweite Edition Postkarten und A-4-Prints durfte ich für Fidea Design entwickeln. Sie sind online hier erhältlich.</Text>
				</div>
				<div className="article__details details">
					<div className="details__item item">
						<Heading className="item__heading" level="h3">Realisation</Heading>
						<Text className="item__text">2020</Text>
					</div>
					<div className="details__item item">
						<Heading className="item__heading" level="h3">Leistungen</Heading>
						<Text className="item__text">Branding, Print Design, Digital Design</Text>
					</div>
					<div className="details__item item">
						<Heading className="item__heading" level="h3">Realisation</Heading>
						<Text className="item__text">2020</Text>
					</div>
				</div>	
			</div>
	);

};

export default Article;