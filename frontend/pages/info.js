import Page from 'components/04-layouts/page/page';
import Teaser from 'components/03-organisms/teaser/teaser';
import About from 'components/03-organisms/about/about';
import Founder from 'components/03-organisms/founder/founder';

const Info = () => {

    return (
        <Page>
            <Teaser />
            <About />
            <Founder />
        </Page>
    );

};


export default Info;