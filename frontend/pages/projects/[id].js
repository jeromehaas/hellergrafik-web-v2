import { useRouter } from 'next/router';
import Page from "components/04-layouts/page/page";
import ProjectDetail from "components/03-organisms/project-detail/project-detail";
import { GET_PROJECTDETAIL } from 'graphql/queries';
import client from 'graphql/client';

const Project = ({ data }) => {

    return (
        <Page>
            <ProjectDetail  data={ data.projectDetail } />
        </Page>
    );

};

export async function getServerSideProps(context) {

    const { id } = context.query;
    const projectDetail = await client.query({ query: GET_PROJECTDETAIL(id) }); 

    return {
        props: {
            data: {
                projectDetail: projectDetail.data.project.data.attributes
            }
        }
    };

};

export default Project;