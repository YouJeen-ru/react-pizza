import React, {useState} from 'react';

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = index => {
        setActiveItem(index)
    }
    return (
        <>
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {
                        items && items.map((name, index) =>
                            <li className={activeItem === index ? 'active' : ''}
                                onClick={() => onSelectItem(index)} key={`${name}-${index}`}>
                            {name}
                        </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Categories;