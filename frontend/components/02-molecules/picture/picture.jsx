import Image from "next/image";
import PropTypes from 'prop-types';

const Picture = ({ className, images, priority }) => {

	
	const getLength = (images) => {
		let length;
		switch(images.length) {
			case 1: length = 'one'; break;
			case 2: length = 'two'; break;
			case 3: length = 'three'; break;
			default: 'one';
		};
		return length;
	};
	
	
	return (
		<div className={`${ className } picture picture--${ getLength(images) }`}>
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