import NavigationMobile from "components/03-organisms/navigation-mobile/navigation-mobile";
import NavigationDesktop from "components/03-organisms/navigation-desktop/navigation-desktop";
import FooterDesktop from "components/03-organisms/footer-desktop/footer-desktop";
import FooterMobile from "components/03-organisms/footer-mobile/footer-mobile";
import PropTypes from "prop-types";
import Meta from "components/01-atoms/meta/meta";


const Page = ({ className, children, meta }) => {

	return (
		<body className={`${ className } page`}>
			<div className='page__inner'>
				<NavigationMobile />
				<NavigationDesktop />
				<Meta meta={ meta } />
				{ children }
				<FooterDesktop />
				<FooterMobile />
			</div>
		</body>
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