import NavigationMobile from "components/03-organisms/navigation-mobile/navigation-mobile";
import NavigationDesktop from "components/03-organisms/navigation-desktop/navigation-desktop";
import FooterDesktop from "components/03-organisms/footer-desktop/footer-desktop";
import FooterMobile from "components/03-organisms/footer-mobile/footer-mobile";
import PropTypes from "prop-types";


const Page = ({ className, children }) => {

	return (
		<div className={`${ className } page`}>
			<NavigationMobile />
			<NavigationDesktop />
			{ children }
			<FooterDesktop />
			<FooterMobile />
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