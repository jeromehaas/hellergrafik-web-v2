const NavigationDesktop = () => {

	return (
		<nav className="navigation-desktop">
			<div className="navigation-desktop__bar">
				<div className="navigation-desktop__container">
				<a className="navigation-desktop__logo-link" href="/index.php">
						<img className="navigation-desktop__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik" />
				</a>
				<a className="navigation-desktop__navigation-item link-navigation default-link" href="/work">Arbeiten</a>
				<a className="navigation-desktop__navigation-item link-navigation default-link" href="/info">Info</a>
				<a className="navigation-desktop__navigation-item link-navigation default-link" href="/contact">Kontakt</a>
			</div>
    </div>
    <div className="navigation-desktop__placeholder"></div>
	</nav>
	);

};

export default NavigationDesktop;