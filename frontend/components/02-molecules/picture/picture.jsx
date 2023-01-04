import Image from "next/image";
import PropTypes from 'prop-types';

const Picture = ({ className, orientation, images, alt }) => {
	
	return (
		<div className={`${ className } picture`}>
			{ images.map((image) => (
				<Image className="picture__item" src={ image.src } width={ 2500 } height={ orientation === 'portrait' ? 2500 : 2950 } alt={ image.alt }  />
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