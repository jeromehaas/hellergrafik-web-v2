import Text from "../text/text"

const Table = ({ className, children }) => {

    return (
        <table className={`${ className } table`}>
            <thead className="table__head"></thead>
            <tbody className="table__body">
                { children.map((item) => (
                    <tr className="table__row" key={ item.id }>
                        <td className="table__cell cell"><Text className="cell__text">{ item.title }</Text></td>
                        <td className="table__cell cell"><Text className="cell__text">{ item.value }</Text></td>
                    </tr>
                ))}
            </tbody>
            <tfoot className="table__footer"></tfoot>
        </table>
    );

};

export default Table;