import PropTypes from "prop-types";
import Head from "next/head";

const Meta = ({ meta }) => {

    return (
        <Head>
            <title>{ meta.title }</title>
            <meta name="description" content={ meta.description } />
            <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
        </Head>
    );

};

Meta.propTypes = {
    meta: PropTypes.object
};

Meta.defaultProps = {
    meta: {
        title: 'hellergrafik - Grafik für Helle Köpfe',
        description: 'Hinter heller grafik steckt eine visuelle Gestalterin aus Luzern mit Passion zu durchdachtem Branding.'
    },
};

export default Meta;