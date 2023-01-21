import React, {useEffect, useState} from 'react';
import PostFilter from "../components/PostFilter";
import  '../components/Post.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {useFetching} from "../hooks/useFetching";
import BlogService from "../API/BlogService";
import {getPageCount} from "../utils/pages";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";

interface IPost{
    id: number
    title: string
    body: string
}

const BlogPage: React.FC = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'About me', body: 'My name is Alex, i`m a frontend developer!'},
        {id: 2, title: 'My skills', body: 'Using html, css, js, react, redux'},
        {id: 3, title: 'Stage', body: '2 years'},
    ])
    const [visible, setVisible] = useState(false)

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await BlogService.getAll(limit, page)
        setPosts(response.data)
        const totalCount =response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    let pagesArr = usePagination(totalPages)
    const changePage = (page: number) => {
        setPage(page)
        // fetchPosts(page, limit)
    }
    const addPost = (post: any, setPost: Function) => {
        let newPost = {
            id: Date.now(),
                title: post.title,
                body: post.body
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})

    }
    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));

    }
    useEffect(() => {

        // @ts-ignore
        fetchPosts()

        // fetchPosts:Function ();

    }, [page])
    return (
        <>
            <div className={'blogPage'}>


                <MyButton onClick={() => setVisible(true)}>Add Post</MyButton>
                <MyModal visible={visible} setVisible={setVisible}>
                <PostForm addPost={addPost} setVisible={setVisible} />
                </MyModal>

                <hr style={{margin: '15px 0', width: '60%'}}/>
                <PostFilter/>

                {postError && <>We have a problem: {postError}</>}
                { isPostLoading
                    ? <Loader/>
                    : <PostList removePost={removePost} posts={posts} setPosts={setPosts}/>
                }
                <Pagination page={page} changePage={changePage} pagesArr={pagesArr}/>
            </div>
        </>

    );
};

export default BlogPage;