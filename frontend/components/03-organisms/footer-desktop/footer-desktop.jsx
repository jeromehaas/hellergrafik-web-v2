const FooterDesktop = () => {

	return (
		<footer className="footer-desktop">
    	<div className="footer-desktop__container">
				<address className="footer-desktop__logo logo">
						<a className="logo__link" href="#">
								<img className="logo__logo" src="/logos/hellergrafik/full.svg" alt="heller grafik" />
						</a>
				</address>
				<address className="footer-desktop__connectors connectors">
						<a className="connectors__item default-link" href="mailto:isabel@hellergrafik.ch">isabel@hellergrafik.ch</a>
						<a className="connectors__item default-link" href="tel:0774052349">077 405 23 49</a>
						<a className="connectors__item default-link" target="_blank" href="https://www.instagram.com/hellergrafik/">Instagram</a>
				</address>
				<address className="footer-desktop__links links">
					<a className="links__item default-link" href="#">Impressum</a>
					<a className="links__item default-link" href="#">Datenschutz</a>
					<p className="links__item">©Isabel Heller</p>
				</address>
  	  </div>
		</footer>

	)

};

export default FooterDesktop;