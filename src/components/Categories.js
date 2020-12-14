import React, {useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

const Categories = React.memo(({activeCategory, items, onClickCategory }) => {

    return (
        <>
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
                        Все
                    </li>

                    {
                        items && items.map((name, index) =>
                            <li className={activeCategory === index ? 'active' : ''}
                                onClick={() => onClickCategory(index)} key={`${name}-${index}`}>
                            {name}
                        </li>)
                    }

                </ul>
            </div>
        </>
    );
});



export default Categories;