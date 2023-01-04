import Article from "components/02-molecules/article/article";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";
import Page from "components/04-layouts/page/page";
import Cards from "components/02-molecules/cards/cards";
import Picture from "components/02-molecules/picture/picture";
import ContactInfos from "components/02-molecules/contact-infos/contact-infos";

const Start = () => {

  return (
		<Page>
			<Cards />
			<ContactInfos />
			<Picture images={[
				{ src: "/images/projects/hellergrafik/01-hellergrafik.jpg", alt: "Image" },
				{ src: "/images/projects/hellergrafik/02-hellergrafik.jpg", alt: "Image" },
			]}
			/>
			<ProjectPreview />
			<ProjectPreview />
			<Article />
		</Page>
  );

};

export default Start;