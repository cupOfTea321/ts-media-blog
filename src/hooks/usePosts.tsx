import  {useMemo} from 'react';

// Кастомный хук, отвечающий за сортировку и поиск постов


const useSortedPosts = (posts: Array<any>, sort: string) => {

    const sortedPosts = useMemo(() => {

        if (sort){
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        else {
            return posts
        }
    }, [sort, posts])
    return sortedPosts;
};
const usePosts = (posts: Array<any>, sort: string, search: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search))
    }, [sortedPosts, search])
    return sortedAndSearchedPosts
}

export default usePosts;