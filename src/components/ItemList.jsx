import {Item} from "./Item";

export function ItemList({ items }) {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-3 mb-3" key={item.id}>
                    <Item {...item} />
                </div>
            ))}
        </div>
    );
}
