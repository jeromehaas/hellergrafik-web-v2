const FooterMobile = () => {

	return (
		<footer className="footer-mobile">
    <address className="footer-mobile__connectors">
        <a className="connectors__item default-link" target="_blank" href="mailto:isabel@hellergrafik.ch">isabel@hellergrafik.ch</a>
        <a className="connectors__item default-link" href="tel:0774052349">077 405 23 49</a>
    </address>
    <address className="footer-mobile__links links">
        <div className="links__container">
            <a className="links__item default-link" target="_blank" href="https://www.instagram.com/hellergrafik/">Instagram</a>
            <a className="links__item default-link" href="https://hellergrafik.ch/lang/de/pages/privacy.php">Datenschutz</a>
            <a className="links__item default-link" href="https://hellergrafik.ch/lang/de/pages/impressum.php">Impressum</a>
        </div>
        <p className="links__copyright" >©Isabel Heller</p>
    </address>
	</footer>
	)

};

export default FooterMobile;