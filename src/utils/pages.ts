export const getPageCount = (totalCount: any, limit: number) => {
    return Math.ceil(totalCount / limit)
}