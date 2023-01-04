import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import PropTypes from 'prop-types';

const Cards = ({ className }) => {

	return (
		<div className={`${ className } cards`} >
			<div className="cards__item item">
				<Heading className="item__heading" level="h3">Meine Leistungen</Heading>
				<ul className="item__list list">
					<Text className="list__item">Branding</Text>
					<Text className="list__item">Braind Strategy</Text>
					<Text className="list__item">Brand Identity</Text>
					<Text className="list__item">Print Design</Text>
					<Text className="list__item">Editorial Design</Text>
					<Text className="list__item">Digital Design</Text>
					<Text className="list__item">Packaging Design</Text>
					<Text className="list__item">Campain Design</Text>
				</ul>
			</div>
			<div className="cards__item item">
				<Heading className="item__heading" level="h3">Meine Leistungen</Heading>
				<ul className="item__list list">
					<Text className="list__item">Branding</Text>
					<Text className="list__item">Braind Strategy</Text>
					<Text className="list__item">Brand Identity</Text>
					<Text className="list__item">Print Design</Text>
					<Text className="list__item">Editorial Design</Text>
					<Text className="list__item">Digital Design</Text>
					<Text className="list__item">Packaging Design</Text>
					<Text className="list__item">Campain Design</Text>
				</ul>
			</div>
		</div>
	);

};

Cards.PropTypes = {
	className: PropTypes.string,
};

Cards.defaultProps = {
 className: ''
};

export default Cards;