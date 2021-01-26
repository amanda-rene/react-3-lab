import React from 'react';


function ListItem({data}){
    return (        
    <div className = 'List-Item'>
            <div className='data-list'>
                <p>{data.id}</p>
            </div>
        </div>
    )
}

export default ListItem;