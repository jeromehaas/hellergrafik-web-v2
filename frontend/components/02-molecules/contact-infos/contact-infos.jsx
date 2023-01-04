import Text from "components/01-atoms/text/text";
import Link from "next/link";

const ContactInfos = ({ className }) => {

	return (
		<div className={`${ className } contact-infos`}>
			<address className="contact-infos__address address">
				<Text className="address__item">heller grafik</Text>	
				<Text className="address__item">Isabel Heller</Text>	
				<Text className="address__item">Zähringerstrasse 13</Text>	
				<Text className="address__item">6003 Luzern</Text>	
			</address>
			<div className="contact-infos__contact contact">
				<Link className="contact__item-link" href="mailto:isabel@hellergrafik.ch">
					<Text className="contact__item">isabel@hellergrafik.ch</Text>	
				</Link>
				<Link className="contact__item-link" href="tel:0774052349">
					<Text className="contact__item">077 405 23 49</Text>	
				</Link>
			</div>
		</div>
	)

};

export default ContactInfos;