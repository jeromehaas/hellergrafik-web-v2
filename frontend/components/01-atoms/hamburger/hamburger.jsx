import PropTypes from 'prop-types';

const Hamburger = ({ className, open, onClick }) => {

	return (
		<button className={` ${ className } hamburger-menu hamburger--squeeze hamburger ${ open ? 'is-active' : '' }`} type="button" onClick={ onClick }  open={ open }>
			<span className="hamburger__box">
				<span className="hamburger__inner"></span>
			</span>
		</button>
	);

};

Hamburger.propTypes = {
	className: PropTypes.string,
	open: PropTypes.bool,
	onClick: PropTypes.func,
};

Hamburger.defaultPropts = {
	className: '',
	open: false,
};

export default Hamburger;