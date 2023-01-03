import NavigationMobile from "components/03-organisms/navigation-mobile/navigation-mobile";
import PropTypes from "prop-types";

const Page = ({ className, children }) => {

	return (
		<div className={`${ className } page`}>
			<NavigationMobile />
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