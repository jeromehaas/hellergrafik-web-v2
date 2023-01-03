import BigArrowLink from "components/01-atoms/big-arrow-link/big-arrow-link";
import Image from "next/image";
import Link from "next/link";
import PropTypes  from "prop-types";

const ProjectPreview = ({ className }) => {

	return (
		<div className={`${ className } project-preview`}>
			<Link className="project-preview__image-link" href="/">
				<Image className="project-preview__image" src="/images/projects/hellergrafik/01-hellergrafik.jpg" width="2500" height="2000" alt="Project Image" />
			</Link>
			<BigArrowLink className="project-preview__link">Project Link</BigArrowLink>
		</div>
	);

};

ProjectPreview.propTypes = {
	className: PropTypes.string
};

ProjectPreview.defaultProps = {
	className: ''
};

export default ProjectPreview;