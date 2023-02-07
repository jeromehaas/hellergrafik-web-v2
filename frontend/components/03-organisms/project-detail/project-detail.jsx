import Article from "components/02-molecules/article/article";
import Section from "components/04-layouts/section/section";
import Picture from "components/02-molecules/picture/picture";

const ProjectDetail = ({ data }) => {

    console.log(data);

    return (
        <Section className="project-detail">
            <Picture 
                className="project-detail__image" 
				images={[{ src: `http://localhost:1337${ data.teaser.data.attributes.formats?.large.url || data.teaser.data.attributes.url }`, alt: data.article.heading }]}
                priority={ true }
            />
            <Article 
                title={ data.article.heading }  
                text={ data.article.text }
                details={ data.article.details }
            />
            { data.article.images.map((collection, index) => {
                const src = collection.image.data.map((image) => ({ src: `http://localhost:1337${ image.attributes.formats?.large.url || image.attributes.url }` , alt: data.article.heading }));
                return (
                    <Picture 
                        className="project-detail__image" 
                        images={ src } 
                        key={ index } 
                        priority={ true } 
                    />);
            })}
        </Section>
    );

};

export default ProjectDetail;