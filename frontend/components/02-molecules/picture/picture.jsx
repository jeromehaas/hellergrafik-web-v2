import Image from "next/image";
import PropTypes from 'prop-types';

const Picture = ({ className, images, priority }) => {

	return (
		<div className={`${ className } picture`}>
			{ images.map((image, index) => (
				<Image className="picture__item" priority={ priority }  key={ index } src={ image.src } width={ 2500 } height={ image.orientation === 'portrait' ? 2500 : 2950 } alt={ image.alt }  />
			))}
		</div>
	)
};

Picture.propTypes = {
	className: PropTypes.string,
	orientation: PropTypes.string,
	images: PropTypes.array,
	alt: PropTypes.string,
};

Picture.defaultProps = {
	className: '',
	orientation: 'landscape',
	images: [],
	alt: ''
};

export default Picture;