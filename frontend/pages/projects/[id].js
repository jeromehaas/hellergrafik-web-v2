import { useRouter } from 'next/router';
import Page from "components/04-layouts/page/page";
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