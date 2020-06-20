import React from 'react'
import './Items.css'
const Items = (props)=>{
    const {items}=props;
    const ListItems = items.map(item=>{
        return(
            <div key={item.id}>
                <span className="ToDo">{item.ToDo}</span>

            </div>
        )
    })
    return (
        <div className="ListItems">
            <div>
                {ListItems}
            </div>
        </div>
    )
}
export default Items