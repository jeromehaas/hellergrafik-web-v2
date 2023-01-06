import Text from 'components/01-atoms/text/text';
import Link from 'next/link';
import PropTypes from 'prop-types';

const List = ({ className, children }) => {

    return (
        <div className={`${ className } list`}>
            { children.map((item) => (
                <div className="list__item item">
                { item.link ? (
                    <Link className="item__link" href={ item.link }>
                        <Text className="item__text">{ item.value }</Text>
                    </Link>
                ) : (
                    <Text className="item__text">{ item.value }</Text>
                )
            }
                </div>
            ))}
        </div>
    );

};

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array
};

List.defaultProps = {
    className: '',
    children: []
}

export default List