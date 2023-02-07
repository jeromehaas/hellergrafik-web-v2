import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import Table from "components/01-atoms/table/table";
import List from "components/01-atoms/list/list";
import ReactMarkdown from "react-markdown";

const Article = ({ className, title, text, details }) => {

	return (
			<div className={`${ className } article`}>
				<Heading className="article__heading">{ title }</Heading>	
				<ReactMarkdown className="article__text text" children={ text } />
				<div className="article__details details">
					{ details.map((detail) => (
          				<div className="details__item item" key={ detail.id }>
							<Heading className="item__heading" level="h3">{ detail.title }</Heading>
							<div className="item__detail detail"></div>
							<ReactMarkdown className="detail__text text">{ detail.content }</ReactMarkdown>
						</div>
					))}
				</div>	
			</div>
	);

};

export default Article;