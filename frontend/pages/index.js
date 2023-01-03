import Text from "components/01-atoms/text/text";
import Heading from "components/01-atoms/heading/heading";
import SmallArrowLink from "components/01-atoms/small-arrow-link/small-arrow-link";
import BigArrowLink from "components/01-atoms/big-arrow-link/big-arrow-link";
import ProjectPreview from "components/02-molecules/project-preview/project-preview";
import Page from "components/04-layouts/page/page";

const Start = () => {

  return (
		<Page>
			<ProjectPreview />
			<ProjectPreview />
		</Page>
  );

};

export default Start;