import Heading from "components/01-atoms/heading/heading";
import Text from "components/01-atoms/text/text";
import PropTypes from 'prop-types';

const Cards = ({ className }) => {

	return (
		<div className={`${ className } cards`} >
			<div className="cards__item item">
				<Heading className="item__heading" level="h3">Meine Leistungen</Heading>
				<ul className="item__list list">
					<Text className="list__item text--big">Branding</Text>
					<Text className="list__item text--big">Braind Strategy</Text>
					<Text className="list__item text--big">Brand Identity</Text>
					<Text className="list__item text--big">Print Design</Text>
					<Text className="list__item text--big">Editorial Design</Text>
					<Text className="list__item text--big">Digital Design</Text>
					<Text className="list__item text--big">Packaging Design</Text>
					<Text className="list__item text--big">Campain Design</Text>
				</ul>
			</div>
			<div className="cards__item item">
				<Heading className="item__heading" level="h3">Meine Werte</Heading>
				<ul className="item__list list">
					<Text className="list__item text--big">Ganzheitlich</Text>
					<Text className="list__item text--big">Effektiv</Text>
					<Text className="list__item text--big">Empathisch</Text>
					<Text className="list__item text--big">Nachhaltig</Text>
					<Text className="list__item text--big">Passioniert</Text>
				</ul>
			</div>
		</div>
	);

};

Cards.propTypes = {
	className: PropTypes.string,
};

Cards.defaultProps = {
 className: ''
};

export default Cards;