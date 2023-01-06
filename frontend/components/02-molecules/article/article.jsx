import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Table from "components/01-atoms/table/table";
import List from "components/01-atoms/list/list";

const Article = ({ className, title, text, details }) => {

	return (
			<div className={`${ className } article`}>
				<Heading className="article__heading">{ title }</Heading>	
				<Text className="article__text">{ text }</Text>
				<div className="article__details details">
					{details.map((detail) => (
          				<div className="details__item item" key={ detail.id }>
							<Heading className="item__heading" level="h3">{ detail.title }</Heading>
							{ detail.type === 'text' && <Text className="item__text">{ detail.content }</Text> }
							{ detail.type === 'table' && <Table className="item__table">{ detail.content }</Table> }
							{ detail.type === 'list' && <List className="item__table">{ detail.content }</List> }
						</div>
					))}
				</div>	
			</div>
	);

};

export default Article;