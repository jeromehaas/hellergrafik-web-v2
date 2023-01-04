import BigArrowLink from "components/01-atoms/big-arrow-link/big-arrow-link";
import Image from "next/image";
import Link from "next/link";
import PropTypes  from "prop-types";

const ProjectPreview = ({ className, title, image, href }) => {

	return (
		<div className={`${ className } project-preview`}>
			<Link className="project-preview__image-link" href={ href }>
				<Image className="project-preview__image" src={ image.src } width="2500" height="2000" alt={ image.alt } />
			</Link>
			<BigArrowLink className="project-preview__link" href={ href }>{ title }</BigArrowLink>
		</div>
	);

};

ProjectPreview.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.object
};

ProjectPreview.defaultProps = {
	className: '',
	title: '',
};

export default ProjectPreview;