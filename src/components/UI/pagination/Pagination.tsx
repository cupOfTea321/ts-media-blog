import React from 'react';
import cl from './Pagination.module.css'
interface IPagination{
    pagesArr: Array<number>
    changePage: Function
    page: number
}
const Pagination: React.FC<IPagination> = ({pagesArr, changePage, page}) => {
    return (
        <>
            {pagesArr.map(p =>
                <button
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? `${cl.page}, ${cl.page_current}` : `${cl.page}`}>
                    {p}
                </button>
            )}
        </>

    );
};

export default Pagination;