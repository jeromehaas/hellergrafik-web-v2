import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Table from "components/01-atoms/table/table";

const Article = ({ className, title, text, details }) => {

	return (
			<div className={`${ className } article`}>
				<Heading className="article__heading">{ title }</Heading>	
				<Text className="article__text">{ text }</Text>
				<div className="article__details details">
					{details.map((detail) => (
          				<div className="details__item item" key={ detail.id }>
							<Heading className="item__heading" level="h3">{ detail.title }</Heading>
							{ detail.content && <Text className="item__text">{ detail.content }</Text> }
							{ detail.table && <Table className="item__table">{ detail.table }</Table> }
						</div>
					))}
				</div>	
			</div>
	);

};

export default Article;