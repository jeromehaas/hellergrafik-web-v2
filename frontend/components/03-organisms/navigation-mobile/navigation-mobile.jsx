import PropTypes from "prop-types";
import Hamburger from "components/01-atoms/hamburger/hamburger";
import { useState, useEffect, useRef } from 'react';
import { gsap }  from 'gsap';

const NavigationMobile = ({ className }) => {

	const [status, setStatus] = useState('closed');
	const navigation = useRef(null);
	const context = gsap.context(() => {}, navigation);

	useEffect(() => {
		return () => context.revert();
	}, []);

	useEffect(() => {
		context.add(() => {
			const timeline = gsap.timeline({});
			if (status === 'closed') {
				timeline.to('.list__item', { right: '-100%', stagger: 0.15, duration: 0.3, reversed: true  });
				timeline.to('.menu', { height: 0, duration: 0.1 });
			}
			if (status === 'open') {
				timeline.to('.menu', { height: 160, duration: 0.1 });
				timeline.to('.list__item', { right: '0%', stagger: 0.15, duration: 0.3 });
			};
		});
	}, [status]);
	
	const toggleStatus = () => {
		status === 'closed' ? setStatus('open') : setStatus('closed');
	};
	
	return (
		<nav className={`${ className } navigation-mobile ${ status === 'open' ? 'navigation-mobile--open' : '' }`} ref={ navigation }>
			<div className="navigation-mobile__bar bar" >
        <a className="bar__logo-link" href="/">
          <img className="bar__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik" />
        </a>
				<Hamburger onClick={ toggleStatus } open={ status === 'open' ? true : false } />
    	</div>
    <div className="navigation-mobile__placeholder"></div>
    <div className="navigation-mobile__menu menu" onClick={ toggleStatus }>
        <ul className="menu__list list">
            <li className="list__item"><a className="navigation-mobile__link-background__list-item__link default-link" href="/lang/de/pages/work.php">Arbeiten</a></li>
            <li className="list__item"><a className="navigation-mobile__link-background__list-item__link default-link" href="/lang/de/pages/info.php">Info</a></li>
            <li className="list__item"><a className="navigation-mobile__link-background__list-item__link default-link" href="/lang/de/pages/contact.php">Kontakt</a></li>
        </ul>
    </div>
		</nav>
	);

};

NavigationMobile.propTypes = {
	className: PropTypes.string,
};

NavigationMobile.defaultProps = {
	className: '',
};

export default NavigationMobile;