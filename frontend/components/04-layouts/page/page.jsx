import PropTypes from "react";

const Page = ({ className, children }) => {

	return (
		<div className={`${ className } page`}>
			{ children }
		</div>
	);

};

Page.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Page.defaultProps = {
	className: ''
};

export default Page;