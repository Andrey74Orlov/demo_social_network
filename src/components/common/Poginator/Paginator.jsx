import React, { useState } from 'react'
import styles from './Paginator.module.css';
// import cn from 'classnames'

let Paginator = (props, { portionSize = 10 }) => {


    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    };

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return <div>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prew</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    key={p}
                    onClick={(e) => { props.onPageChange(p) }}>{p}</span>
            }
            )
        }
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
    </div>
}

export default Paginator