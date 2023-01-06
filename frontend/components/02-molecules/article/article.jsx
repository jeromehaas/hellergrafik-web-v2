import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";

const Article = ({ className, title, text }) => {

	return (
			<div className={`${ className } article`}>
				<Heading className="article__heading">{ title }</Heading>	
				<div className="article__text text">
					<Text className="text__item">{ text }</Text>
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