const NavigationDesktop = () => {

	return (
		<nav class="navigation-desktop">
			<div class="navigation-desktop__bar">
				<div class="navigation-desktop__container">
				<a class="navigation-desktop__logo-link" href="/index.php">
						<img class="navigation-desktop__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik" />
				</a>
				<a class="navigation-desktop__navigation-item link-navigation default-link" href="/work">Arbeiten</a>
				<a class="navigation-desktop__navigation-item link-navigation default-link" href="/info">Info</a>
				<a class="navigation-desktop__navigation-item link-navigation default-link" href="/contact">Kontakt</a>
			</div>
    </div>
    <div class="navigation-desktop__placeholder"></div>
	</nav>
	);

};

export default NavigationDesktop;