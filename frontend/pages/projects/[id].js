import Page from "components/04-layouts/page/page";
import Heading from "components/01-atoms/heading/heading";
import { useRouter } from 'next/router';
import Picture from "components/02-molecules/picture/picture";
import Article from "components/02-molecules/article/article";
import ProjectDetail from "components/03-organisms/project-detail/project-detail";

const Project = () => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <Page>
            <ProjectDetail />
        </Page>
    );

};

export default Project;