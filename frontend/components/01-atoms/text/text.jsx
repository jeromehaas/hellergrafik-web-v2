import PropTypes from 'prop-types';

const Text = ({ className, children }) => {

	return (
		<p className={`${ className } text`}>text</p>
	);

};

Text.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Text.defaultProps = {
	className: ''
};

export default Text;