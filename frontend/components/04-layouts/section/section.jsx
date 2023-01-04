import PropTypes from 'prop-types';

const Section = ({ className, children }) => {

	return (
		<div className={`${ className } section`} >
			<div className={`${ className }__inner section__inner`} >
				{ children }
			</div>
		</div>
	);

};

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Section.defaultProps = {
	className: '',
};

export default Section;