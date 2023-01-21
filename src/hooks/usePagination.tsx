import {useMemo} from "react";

const usePagination = (totalPages: number) => {
    // Массив пагинации
    const result = useMemo(() => {
        let pagesArr =  []
        for (let i = 0; i < totalPages; i++){
            pagesArr.push(i + 1)
        }
        return pagesArr
    }, [totalPages])
    return result

}

export default usePagination;