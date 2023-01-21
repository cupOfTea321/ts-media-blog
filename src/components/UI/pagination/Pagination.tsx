import React from 'react';

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
                    className={page === p ? 'page, page_current' : 'page'}>
                    {p}
                </button>
            )}
        </>

    );
};

export default Pagination;