import React, {useState} from "react";
interface IFetching{
    fetching: () => string
}

// кастомный хук, предоставляющий обработку индикации
// загрузки и обработку ошибки запроса на получение данных
export const useFetching = (callback: Function) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const fetching: Function = async () => {
        try{
            setIsLoading(true)
            await callback()
        } catch (e: any){
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}